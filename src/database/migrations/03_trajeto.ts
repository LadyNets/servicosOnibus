import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("trajeto", (table) => {
    table.increments("id_trajeto").primary();
    table
      .integer("id_linha")
      .notNullable()
      .references("id_linha")
      .inTable("linha");
    table
      .integer("id_origem")
      .notNullable()
      .references("id_cidade")
      .inTable("cidade");
    table
      .integer("id_destino")
      .notNullable()
      .references("id_cidade")
      .inTable("cidade");
    table.float("preco", 2).notNullable();
    table.integer("distancia").notNullable();
    table.time("partida").notNullable();
    table.time("chegada").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("trajeto");
}
