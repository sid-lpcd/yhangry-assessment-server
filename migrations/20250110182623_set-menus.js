export function up(knex) {
  return knex.schema.createTable("set_menus", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("description");
    table.integer("display_text").defaultTo(0);
    table.string("image").notNullable();
    table.string("thumbnail");
    table.boolean("is_vegan").defaultTo(false);
    table.boolean("is_vegetarian").defaultTo(false);
    table.boolean("is_seated").defaultTo(false);
    table.boolean("is_standing").defaultTo(false);
    table.boolean("is_canape").defaultTo(false);
    table.boolean("is_mixed_dietary").defaultTo(false);
    table.boolean("is_meal_prep").defaultTo(false);
    table.boolean("is_halal").defaultTo(false);
    table.boolean("is_kosher").defaultTo(false);
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
