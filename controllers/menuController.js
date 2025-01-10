import { getCuisines } from "../models/cuisineModel";
import { getSetMenus } from "../models/menuModel";

export const getAllAttractions = async (req, res) => {
  try {
    const { cuisineSlug, page = 1, pageSize = 20 } = req.query;

    const setMenus = await getSetMenus(cuisineSlug, page, pageSize);
    const cuisines = await getCuisines();

    res.status(200).json({
      setMenus,
      cuisines,
      pagination: {
        currentPage: Number(page),
        pageSize: Number(pageSize),
        totalSetMenus: setMenus.length,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menus" });
  }
};
