const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const favorites = await tables.favorite.readAll();

    res.json(favorites);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const favorite = await tables.favorite.read(req.params.id);

    if (favorite == null) {
      res.sendStatus(404);
    } else {
      res.json(favorite);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const favorite = req.body;

  try {
    const insertId = await tables.favorite.create(favorite);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};


module.exports = { browse,  read,  add };
