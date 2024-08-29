const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const items = require("./controllers/itemActions");

// Route to get a list of items
router.get("/items", items.browse);

// Route to get a specific item by ID
router.get("/items/:id", items.read);

// Route to add a new item
router.post("/items", items.add);

// Import item-related actions
const users = require("./controllers/UserActions");

// Route to get a list of items
router.get("/users", users.browse);

// Route to get a specific item by ID
router.get("/users/:id", users.read);

// Route to add a new item
router.post("/users", users.add);

/* ************************************************************************* */

module.exports = router;
