import knex from "../knexfile.js";

export const getSetMenus = async (cuisineSlug, page, pageSize) => {
  const offset = (page - 1) * pageSize;

  const query = knex("set_menus")
    .select("set_menus.*")
    .count("set_menus_cuisines.id as number_of_live_menus")
    .leftJoin(
      "set_menus_cuisines",
      "set_menus.id",
      "set_menus_cuisines.set_menu_id"
    )
    .leftJoin("cuisines", "set_menus_cuisines.cuisine_id", "cuisines.id")
    .where("set_menus.status", "live")
    .groupBy("set_menus.id")
    .orderBy("set_menus.number_of_orders", "desc");

  if (cuisineSlug) {
    query.andWhere("cuisines.slug", cuisineSlug);
  }

  return query.limit(pageSize).offset(offset);
};
