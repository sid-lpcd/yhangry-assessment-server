import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getSetMenusCuisines = async (menu) => {
  return await knex("set_menus_cuisines")
    .join("cuisines", "set_menus_cuisines.cuisine_id", "cuisines.id")
    .where("set_menus_cuisines.set_menu_id", menu.id)
    .select("cuisines.name");
};
