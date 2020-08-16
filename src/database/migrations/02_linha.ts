import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("viagem", (table) => {
    table.increments("id_viagem").primary();
    table
      .enum("modalidade", [
        "Comum",
        "Semi-Direto",
        "Direto",
        "Executivo",
        "Leito",
      ])
      .notNullable();
    table
      .integer("id_inicio_linha")
      .notNullable()
      .references("id_cidade")
      .inTable("cidade");
    table
      .integer("id_fim_linha")
      .notNullable()
      .references("id_cidade")
      .inTable("cidade");
    table.boolean("dom").defaultTo(0);
    table.boolean("seg").defaultTo(0);
    table.boolean("ter").defaultTo(0);
    table.boolean("qua").defaultTo(0);
    table.boolean("qui").defaultTo(0);
    table.boolean("sex").defaultTo(0);
    table.boolean("sab").defaultTo(0);
    table.boolean("fer").defaultTo(0);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("viagem");
}
