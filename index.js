import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { readdirSync } from "fs";
import { join, parse } from "path";

import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

app.use(express.json());
try {
  readdirSync("./routes").map(async (file) => {
    const routePath = `./routes/${file}`;
    const { default: route } = await import(routePath);
    const routeName = `/${parse(file).name}`;
    app.use(routeName, errorHandler, route);
  });
} catch (error) {
  console.warn(error);
}

try {
  app.get("/", (req, res) => {
    res.send("main page 1.0.0");
  });

  app.listen(port, () => {
    console.info("app runing at port : " + port);
  });
} catch (error) {
  console.log(error);
}
