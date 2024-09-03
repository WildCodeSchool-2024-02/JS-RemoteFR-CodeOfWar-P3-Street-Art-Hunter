const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const citys = await tables.city.readAll();

    res.json(citys);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const city = await tables.city.read(req.params.id);

    if (city == null) {
      res.sendStatus(404);
    } else {
      res.json(city);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const city = req.body;

  try {
    const insertId = await tables.city.create(city);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const city = { ...req.body, id: req.params.id };
  try {
    await tables.city.update(city);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
const destroy = async (req, res, next) => {
  try {
    await tables.city.delete(req.params.id);
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
