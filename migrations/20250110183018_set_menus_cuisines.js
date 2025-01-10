export function up(knex) {
  return knex.schema.createTable("set_menus_cuisines", (table) => {
    table.increments("id").primary();
    table
      .integer("set_menu_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("set_menus")
      .onDelete("CASCADE");
    table
      .integer("cuisine_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cuisines")
      .onDelete("CASCADE");
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("set_menus_cuisines");
}
