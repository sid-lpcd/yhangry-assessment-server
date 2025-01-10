import "dotenv/config";
import express from "express";
import cors from "cors";
import menuRoutes from "./routes/menuRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.YHANGRY_PORT || 5050;

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use("/menus", menuRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

export { app };
