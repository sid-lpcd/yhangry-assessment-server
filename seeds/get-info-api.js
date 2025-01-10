import { getAllSetMenus } from "../helpers/yhangryApi.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("groups").del();
  await knex("set_menus_cuisines").del();
  await knex("cuisines").del();
  await knex("set_menus").del();

  const allMenus = await getAllSetMenus();

  console.log("allMenus:", allMenus);

  try {
    for (const menu of allMenus) {
      const setMenuId = await knex("set_menus").insert({
        name: menu.name,
        description: menu.description,
        image: menu.image,
        thumbnail: menu.thumbnail,
        price_per_person: menu.price_per_person,
        min_spend: menu.min_spend,
        is_seated: menu.is_seated,
        is_standing: menu.is_standing,
        is_canape: menu.is_canape,
        is_vegan: menu.is_vegan,
        is_vegetarian: menu.is_vegetarian,
        is_halal: menu.is_halal,
        is_kosher: menu.is_kosher,
        is_mixed_dietary: menu.is_mixed_dietary,
        is_meal_prep: menu.is_meal_prep,
        status: menu.status,
        display_text: menu.display_text,
        available: menu.available,
        created_at: new Date(menu.created_at),
        number_of_orders: menu.number_of_orders,
      });

      for (const cuisine of menu.cuisines) {
        const [existingCuisine] = await knex("cuisines")
          .select("id")
          .where("id", cuisine.id);

        if (!existingCuisine) {
          await knex("cuisines").insert({
            id: cuisine.id,
            name: cuisine.name,
          });
        }

        await knex("set_menus_cuisines").insert({
          set_menu_id: setMenuId,
          cuisine_id: cuisine.id,
        });
      }

      const { dishes_count, selectable_dishes_count, groups } = menu.groups;

      for (const [groupName, isSelectable] of Object.entries(groups)) {
        await knex("groups").insert({
          set_menu_id: setMenuId,
          name: groupName,
          selectable: isSelectable,
          dishes_count: dishes_count,
          selectable_dishes_count: selectable_dishes_count,
        });
      }
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}
