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

const edit = async (req, res, next) => {
  const favorite = { ...req.body, id: req.params.id };
  try {
    await tables.favorite.update(favorite);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
const destroy = async (req, res, next) => {
  try {
    await tables.favorite.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
module.exports = { browse, read, edit, add, destroy };
