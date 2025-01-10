import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getCuisines = async () => {
  return knex("cuisines");
};
