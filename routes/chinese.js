import { Router } from "express";

import { readFile } from "fs/promises";

const router = Router();
let items = [];

async function loadItems() {
  try {
    const data = await readFile("./data/chinesedetails.json", "utf8");
    items = JSON.parse(data);
    // console.log("Data loaded successfully");
  } catch (error) {
    // console.error("Error reading or parsing JSON:", error);
    throw new Error("Failed to load items");
  }
}

router.get("/", (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedItems = items.slice(startIndex, endIndex);

  res.json({
    totalItems: items.length,
    totalPages: Math.ceil(items.length / limit),
    currentPage: parseInt(page),
    items: paginatedItems,
  });
});

router.get("/:id", (req, res, next) => {
  const itemId = req.params.id;
  const item = items.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    const error = new Error("Item not found");
    error.status = 404;
    next(error);
  }
});

router.get("/search", (req, res, next) => {
  const { q, page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const searchResults = items.filter((item) =>
    item.title.toLowerCase().includes(q.toLowerCase())
  );

  const paginatedResults = searchResults.slice(startIndex, endIndex);

  res.json({
    totalItems: searchResults.length,
    totalPages: Math.ceil(searchResults.length / limit),
    currentPage: parseInt(page),
    items: paginatedResults,
  });
});

loadItems();

export default router;
