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
const upload = require("./services/upload");
const { compareLogin } = require("./services/compareLogin");
const { findCity } = require("./services/findCity");

//  ** USERS ** \\
router.get("/users", users.browse);
router.get("/users/:id", users.read);
router.post(
  "/users",
  verifyMiddleware.verifyFields,
  auth.hashPassword,
  upload.uploadPicture,
  users.add
);
router.put("/users/:id", upload.uploadPicture, users.edit);
router.put(
  "/passwordUsers/:id",
  verifyMiddleware.verifyPassword,
  auth.verifyToken,
  auth.hashPassword,
  users.editPassword
);
// router.put("/passwordUsers/:id", auth.verifyToken, compareLogin, auth.hashPassword, users.editPassword); **Secure Path**
router.delete("/users/:id", users.destroy);

// ** ARTWORKS ** \\
router.get("/artworks", artworks.browse);
router.get("/artworks/validate", artworks.browseByAdmin);
router.get("/artworks/:id", artworks.read);
router.get("/artworks/validate/:id", artworks.readByAdmin);
router.post("/artworks", upload.uploadArtwork, artworks.add);
router.put("/artworks/:id", artworks.edit);
router.delete("/artworks/:id", artworks.destroy);

// ** CITIES ** \\
router.get("/cities", cities.browse);
router.get("/cities/:id", cities.read);
router.post("/cities", auth.verifyToken, cities.add);
router.put("/cities/:id", cities.edit);
router.delete("/cities/:id", cities.destroy);

// ** STYLES ** \\
router.get("/styles", styles.browse);
router.get("/styles/:id", styles.read);
router.post("/styles", auth.verifyToken, styles.add);
router.put("/styles/:id", styles.edit);
router.delete("/styles/:id", styles.destroy);

// ** FAVORITES ** \\
router.get("/favorites", favorites.browse);
router.get("/favorites/:id", favorites.read);
router.post("/favorites", auth.verifyToken, favorites.add);
router.put("/favorites/:id", favorites.edit);
router.delete("/favorites/:id", favorites.destroy);

// ** RANKING - SCORE ** \\
router.get("/ranking/users", ranking.browse);
router.put("/score/:id", users.editScore);

// ** LOGIN - LOGOUT ** \\
router.get("/checkLogin", auth.verifyToken, authActions.isLogged);
router.get("/logout", auth.verifyToken, auth.deleteCookie);
router.post("/login", compareLogin, auth.createToken, authActions.login);

// ** SPECIALES ** \\
router.post("/findCity", findCity);

/* ************************************************************************* */

module.exports = router;
