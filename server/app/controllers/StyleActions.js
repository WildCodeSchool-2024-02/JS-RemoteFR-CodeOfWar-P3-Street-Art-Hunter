const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const style = await tables.style.readAll();

    res.json(style);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const style = await tables.style.read(req.params.id);

    if (style == null) {
      res.sendStatus(404);
    } else {
      res.json(style);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const style = req.body;

  try {
    const insertId = await tables.style.create(style);

    res.status(201).json({ insertId });
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
