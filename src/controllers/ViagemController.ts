import { Request, Response } from "express";
import knex from "../database/connection";

class ViagemController {
  async index(req: Request, res: Response) {
    //Origem, Destino, dom, seg, ter, qua, qui, sex, sab, fer
    try {
      const viagens = await knex("agenda").select("").where(req.body);
      if (!viagens) return res.status(401).json({ error: "Error!" });
      return res.status(200).json(viagens);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}
export default new ViagemController();
