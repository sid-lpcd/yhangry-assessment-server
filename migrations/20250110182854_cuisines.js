export function up(knex) {
  return knex.schema.createTable("cuisines", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("cuisines");
}
