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

const add = async (req, res, next) => {
  const artwork = req.body;
  artwork.user_id = req.decoded.id;
  try {
    const insertId = await tables.artwork.create(artwork);
    res.status(201).json({ insertId });
    console.info("New artwork !");
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const artwork = { ...req.body, id: req.params.id };
  try {
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
  read,
  edit,
  add,
  destroy,
};
