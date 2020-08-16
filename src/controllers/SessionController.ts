import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import authConfig from "../config/auth";
import knex from "../database/connection";
import bcrypt from "bcryptjs";

interface Iusuario {
  id_usuario: Number;
  nome: string;
  cpf: string;
  senha: string;
}

class SessionController {
  async create(req: Request, res: Response) {
    try {
      const { cpf, senha } = req.body;

      const [usuario]: Array<Iusuario> = await knex("usuario").where(
        "cpf",
        cpf
      );

      if (!usuario) {
        return res
          .status(401)
          .json({ error: "Your CPF or password is incorrect!" });
      }

      const checkPassword = await bcrypt.compare(senha, usuario.senha);

      if (!checkPassword) {
        return res
          .status(401)
          .json({ error: "Your CPF or password is incorrect!" });
      }

      delete usuario.senha;

      return res.json({
        usuario,
        token: jwt.sign(
          { id_usuario: "usuario.id_usuario" },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
          }
        ),
      });
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}

export default new SessionController();
