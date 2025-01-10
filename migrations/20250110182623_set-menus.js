export function up(knex) {
  return knex.schema.createTable("set_menus", (table) => {
    table.increments("id").primary();
    table
      .specificType(
        "name",
        "VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
      )
      .notNullable();
    table.text("description");
    table.integer("display_text").defaultTo(0);
    table.string("image").notNullable();
    table.string("thumbnail");
    table.integer("status").defaultTo(0);
    table.integer("is_vegan").defaultTo(0);
    table.integer("is_vegetarian").defaultTo(0);
    table.integer("is_seated").defaultTo(0);
    table.integer("is_standing").defaultTo(0);
    table.integer("is_canape").defaultTo(0);
    table.integer("is_mixed_dietary").defaultTo(0);
    table.integer("is_meal_prep").defaultTo(0);
    table.integer("is_halal").defaultTo(0);
    table.integer("is_kosher").defaultTo(0);
    table.integer("price_per_person").unsigned();
    table.integer("min_spend").unsigned();
    table.boolean("available").defaultTo(true);
    table.integer("number_of_orders").unsigned();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("set_menus");
}
