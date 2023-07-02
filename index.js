import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import vegans from "./routes/vegans.js";
import cocktails from "./routes/cocktails.js";
import chinese from "./routes/chinese.js";
import cakes from "./routes/cakes.js";

//import { readdirSync } from "fs";
//import { parse } from "path";

import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

app.use(express.json());

//readdirSync("./routes").map(async (file) => {
//  const routePath = `./routes/${file}`;
//  const { default: route } = await import(routePath);
//  const routeName = `/${parse(file).name}`;
// app.use(routeName, errorHandler, route);
//});

app.use("/vegans", errorHandler, vegans);
app.use("/cocktails", errorHandler, cocktails);
app.use("/cakes", errorHandler, cakes);
app.use("/chinese", errorHandler, chinese);

app.get("/", (req, res) => {
  res.send("main page 1.0.0");
});

app.listen(port, () => {
  console.info("app runing at port : " + port);
});
