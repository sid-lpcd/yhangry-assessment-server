import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getCuisines = async () => {
  return knex("cuisines")
    .select("cuisines.name")
    .count("set_menus.id as number_of_live_menus")
    .sum("set_menus.number_of_orders as total_orders")
    .leftJoin(
      "set_menus_cuisines",
      "cuisines.id",
      "set_menus_cuisines.cuisine_id"
    )
    .leftJoin("set_menus", "set_menus.id", "set_menus_cuisines.set_menu_id")
    .groupBy("cuisines.id");
};
