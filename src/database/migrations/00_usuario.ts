import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("usuario", (table) => {
    table.increments("id_usuario").primary();
    table.string("nome", 80).notNullable();
    table.string("cpf", 11).notNullable();
    table.string("senha", 200).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("usuario");
}
