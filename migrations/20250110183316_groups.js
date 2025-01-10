export function up(knex) {
  return knex.schema.createTable("groups", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("dishes_count").unsigned();
    table.integer("selectable_dishes_count").unsigned();
    table
      .integer("set_menu_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("set_menus")
      .onDelete("CASCADE");
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("groups");
}
