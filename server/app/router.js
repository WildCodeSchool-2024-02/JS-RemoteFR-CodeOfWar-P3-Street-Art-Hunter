const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
// const items = require("./controllers/itemActions");
const users = require("./controllers/UserActions");
const artworks = require("./controllers/ArtworkActions");
const cities = require("./controllers/CityActions");
const styles = require("./controllers/StyleActions");
const favorites = require("./controllers/FavoriteActions");
const authActions = require("./controllers/authActions");
const ranking = require("./controllers/RankingActions");

const auth = require("./services/auth");
const verifyMiddleware = require("./services/verifyMiddleware");
const { compareLogin } = require("./services/compareLogin");

// Route to get a list of items
// router.get("/items", items.browse);
router.get("/users", users.browse);
router.get("/artworks", artworks.browse);
router.get("/cities", cities.browse);
router.get("/styles", styles.browse);
router.get("/favorites", favorites.browse);
router.get("/users/ranking", ranking.browse);
router.get("/artworks/validate", artworks.validatedByAdmin);

// Route to get a specific item by ID
// router.get("/items/:id", items.read);
router.get("/users/:id", users.read);
router.get("/artworks/:id", artworks.read);
router.get("/cities/:id", cities.read);
router.get("/styles/:id", styles.read);
router.get("/favorites/:id", favorites.read);

// Route to add a new item
// router.post("/items", items.add);
router.post("/artworks", artworks.add);
router.post(
  "/users",
  verifyMiddleware.verifyFields,
  auth.hashPassword,
  verifyMiddleware.uploadPicture,
  users.add
);
router.post("/cities", cities.add);
router.post("/styles", styles.add);
router.post("/favorites", favorites.add);
router.post("/login", compareLogin, auth.createToken, authActions.login);

// Route to update a new item
router.put("/users/:id", verifyMiddleware.uploadPicture, users.edit);
router.put("/artworks/:id", artworks.edit);
router.put("/cities/:id", cities.edit);
router.put("/styles/:id", styles.edit);
router.put("/favorites/:id", favorites.edit);

// Route to delete a new item
router.delete("/users/:id", users.destroy);
router.delete("/artworks/:id", artworks.destroy);
router.delete("/cities/:id", cities.destroy);
router.delete("/styles/:id", styles.destroy);
router.delete("/favorites/:id", favorites.destroy);

/* ************************************************************************* */

module.exports = router;
