import { Request, Response } from "express";
import knex from "../database/connection";

class CidadeController {
  async index(req: Request, res: Response) {
    try {
      const cidades = await knex("cidade");
      if (!cidades) return res.status(401).json({ error: "Error!" });
      return res.status(200).json(cidades);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
  async details(req: Request, res: Response) {
    try {
      const cidade = await knex("cidade").where(
        "id_cidade",
        req.params.id_cidade
      );
      if (!cidade) return res.status(401).json({ error: "Error!" });
      return res.status(200).json(cidade);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
  async create(req: Request, res: Response) {
    try {
      const cidade = await knex("cidade").insert(req.body);
      if (!cidade) return res.status(401).json({ error: "Error!" });
      return res.status(200).json(cidade);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const cidade = await knex("cidade")
        .update(req.body)
        .where("id_cidade", req.params.id_cidade);
      if (!cidade) return res.status(401).json({ error: "Error!" });
      return res.status(200).json(cidade);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const cidade = await knex("cidade")
        .del()
        .where("id_cidade", req.params.id_cidade);
      if (!cidade) return res.status(401).json({ error: "Error!" });
      return res.status(200).json({ message: "Success!" });
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}

export default new CidadeController();
