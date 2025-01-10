import { getCuisines } from "../models/cuisineModel.js";
import { getSetMenus } from "../models/menuModel.js";
import { getSetMenusCuisines } from "../models/setMenusCuisinesModel.js";

export const getAllMenus = async (req, res) => {
  try {
    const { cuisineSlug } = req.query;

    const setMenus = await getSetMenus(cuisineSlug);
    const cuisines = await getCuisines();

    const transformedSetMenus = await Promise.all(
      setMenus.map(async (menu) => {
        const menuCuisines = await getSetMenusCuisines(menu);
        return {
          name: menu.name,
          description: menu.description,
          price: menu.price_per_person,
          minSpend: menu.min_spend,
          thumbnail: menu.thumbnail,
          cuisines: menuCuisines.map((cuisine) => cuisine.name),
        };
      })
    );

    res.status(200).json({
      filters: {
        cuisines: cuisines.map((cuisine) => ({
          name: cuisine.name,
          number_of_orders: cuisine.number_of_live_menus,
          set_menus_count: cuisine.total_orders,
        })),
      },
      setMenus: transformedSetMenus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch menus" });
  }
};
