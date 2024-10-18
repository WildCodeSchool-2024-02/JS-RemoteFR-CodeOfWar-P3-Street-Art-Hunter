const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const artworkStyles = req.query;
    const artworks = await tables.artwork.readAll(artworkStyles);
    res.json(artworks);
  } catch (err) {
    next(err);
  }
};
const browseByAdmin = async (req, res, next) => {
  try {
    const artworks = await tables.artwork.readAllByAdmin();
    res.json(artworks);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const artwork = await tables.artwork.read(req.params.id);

    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.json(artwork);
    }
  } catch (err) {
    next(err);
  }
};

const readByAdmin = async (req, res, next) => {
  try {
    const artwork = await tables.artwork.readByAdmin(req.params.id);
    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.json(artwork);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const artwork = req.body;
  artwork.user_id = 1;
  try {
    const insertId = await tables.artwork.create(artwork);
    res.status(201).json({ insertId });
    console.info("New artwork !");
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const artwork = { ...req.body.modified, id: req.params.id };
  try {
    console.info(artwork);
    await tables.artwork.update(artwork);
    console.info("Artwork edited!!");
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.artwork.delete(req.params.id);
    console.info("Artwork deleted");
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  browseByAdmin,
  read,
  edit,
  add,
  destroy,
  readByAdmin,
};
