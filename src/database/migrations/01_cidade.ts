import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("cidade", (table) => {
    table.increments("id_cidade").primary();
    table.string("nome", 50).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("cidade");
}
