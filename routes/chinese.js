import { Router } from "express";

import { readFile } from "fs/promises";

const router = Router();
let items = [];

async function loadItems() {
  try {
    const data = await readFile("./data/chinesedetails.json", "utf8");
    items = JSON.parse(data);
    console.log("Data loaded successfully");
  } catch (error) {
    console.error("Error reading or parsing JSON:", error);
    throw new Error("Failed to load items");
  }
}

router.get("/", (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedItems = items.slice(startIndex, endIndex);

    return res.json({
      totalItems: items.length,
      totalPages: Math.ceil(items.length / limit),
      currentPage: parseInt(page),
      items: paginatedItems,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = await items.find((item) => item.id === itemId);

    if (item) {
      return res.json(item);
    } else {
      const error = new Error("Item not found");
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

router.get("/search", (req, res, next) => {
  try {
    const { q, page = 1, limit = 10 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const searchResults = items.filter((item) =>
      item.title.toLowerCase().includes(q.toLowerCase())
    );

    const paginatedResults = searchResults.slice(startIndex, endIndex);

    return res.json({
      totalItems: searchResults.length,
      totalPages: Math.ceil(searchResults.length / limit),
      currentPage: parseInt(page),
      items: paginatedResults,
    });
  } catch (error) {
    next(error);
  }
});

loadItems();

export default router;
