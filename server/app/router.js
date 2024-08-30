const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const items = require("./controllers/itemActions");
const users = require("./controllers/UserActions");
const artworks = require("./controllers/ArtworkActions");
const citys = require("./controllers/CityActions");

// Route to get a list of items
router.get("/items", items.browse);
router.get("/users", users.browse);
router.get("/artworks", artworks.browse);
router.get("/citys", citys.browse);

// Route to get a specific item by ID
router.get("/items/:id", items.read);
router.get("/users/:id", users.read);
router.get("/artworks/:id", artworks.read);
router.get("/citys/:id", citys.read);

// Route to add a new item
router.post("/items", items.add);
router.post("/users", users.add);
router.post("/artworks", artworks.add);
router.post("/citys", citys.add);

/* ************************************************************************* */

module.exports = router;
