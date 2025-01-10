import { getCuisines } from "../models/cuisineModel.js";
import { getSetMenus } from "../models/menuModel.js";

export const getAllMenus = async (req, res) => {
  try {
    const { cuisineSlug, page = 1, pageSize = 20 } = req.query;

    console.log(cuisineSlug, page, pageSize);

    const setMenus = await getSetMenus(cuisineSlug, page, pageSize);
    console.log(setMenus);
    const cuisines = await getCuisines();
    console.log(cuisines);

    res.status(200).json({
      filters: {
        cuisines: cuisines.map((cuisine) => ({
          name: cuisine.name,
          slug: cuisine.slug,
          number_of_orders: cuisine.number_of_live_menus,
          set_menus_count: cuisine.total_orders,
        })),
      },
      setMenus: transformedSetMenus,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menus" });
  }
};
