import { Router } from "express";

import { readFile } from "fs/promises";

const router = Router();
// let items = [];

// async function loadItems() {
//   try {
//     const data = await readFile("./data/vegans.json", "utf8");
//     items = JSON.parse(data);
//     console.log("Data loaded successfully");
//   } catch (error) {
//     console.error("Error reading or parsing JSON:", error);
//     throw new Error("Failed to load items");
//   }
// }

const items = [
  {
    id: "1",
    title:
      "Dark chocolate bark with sea salt, rosemary, pistachios and candied citrus",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/vegan_api/1.jpg",
  },
  {
    id: "2",
    title: "Pressure cooker refried beans",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/vegan_api/2.jpg",
  },
  {
    id: "3",
    title: "Beetroot, spinach and coconut curry",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/vegan_api/3.jpg",
  },
  {
    id: "4",
    title: "Traditional pretzels",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/vegan_api/4.jpg",
  },
  {
    id: "5",
    title: "Homemade crispy chilli oil",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/vegan_api/5.jpg",
  },
  {
    id: "6",
    title: "Ultimate vegan lasagne",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/vegan_api/6.jpg",
  },
  {
    id: "7",
    title: "Vegan Victoria sponge cake",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/vegan_api/7.jpg",
  },
  {
    id: "8",
    title: "Vegan quiche",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/vegan_api/8.jpg",
  },
];

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

router.get("/:id", (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = items.find((item) => item.id === itemId);

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

//loadItems();

export default router;
