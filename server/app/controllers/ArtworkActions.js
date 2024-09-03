const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const artworks = await tables.artwork.readAll();

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

  try {
    const insertId = await tables.artwork.create(artwork);
    res.status(201).json({ insertId });
    console.info('New artwork !')
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
