import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getSetMenus = async (cuisineSlug, page, pageSize) => {
  try {
    const offset = (page - 1) * pageSize;
    console.log(cuisineSlug, page, pageSize);

    const query = knex("set_menus")
      .leftJoin(
        "set_menus_cuisines",
        "set_menus.id",
        "set_menus_cuisines.set_menu_id"
      )
      .leftJoin("cuisines", "set_menus_cuisines.cuisine_id", "cuisines.id")
      .orderBy("set_menus.number_of_orders", "desc");

    if (cuisineSlug) {
      query.andWhere("cuisines.name", cuisineSlug);
    }

    return await query.limit(pageSize).offset(offset);
  } catch (error) {
    throw Error(error);
  }
};
