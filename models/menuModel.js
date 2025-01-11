import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getSetMenus = async (cuisineSlug, page, pageSize) => {
  try {
    const query = knex("set_menus")
      .leftJoin(
        "set_menus_cuisines",
        "set_menus.id",
        "set_menus_cuisines.set_menu_id"
      )
      .leftJoin("cuisines", "set_menus_cuisines.cuisine_id", "cuisines.id")
      .select(
        "set_menus.*",
        "cuisines.id as cuisine_id",
        "cuisines.name as cuisine_name"
      )
      .orderBy("set_menus.number_of_orders", "desc");

    if (cuisineSlug) {
      query.andWhere("cuisines.name", cuisineSlug);
    }

    return await query;
  } catch (error) {
    throw Error(error);
  }
};
