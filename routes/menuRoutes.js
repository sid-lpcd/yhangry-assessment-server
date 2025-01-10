import express from "express";
import { getAllMenus } from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getAllMenus);

export default router;
