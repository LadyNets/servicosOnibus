import Knex from "knex";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex) {
  await knex("usuario").insert([
    {
      nome: "Gabrieli Silva da Silva",
      cpf: "04633425005",
      senha: bcrypt.hashSync("123445", 8),
    },
  ]);
}
