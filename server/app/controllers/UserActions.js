const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    if (users.length === 0) {
      res.json({
        message: "pas d'utilisateurs",
        result: users,
      });
    } else {
      res.json({ result: users });
    }
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user) {
      res.json({ result: user });
    } else {
      res.status(404).json({ message: "utilisateur non trouvé" });
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;
  if (req.file) {
    user.avatar = req.file.filename;
  }

  try {
    const result = await tables.user.create(user);
    res.status(201).send(`utilisateur ajouté: ${result.insertId}`);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const user = { ...req.body, id: req.params.id };
  if (req.file) {
    user.avatar = req.file.filename;
  }
  try {
    await tables.user.update(user);
    res.status(204).send(`utilisateur modifié: ${req.params.id}`);
  } catch (error) {
    next(error);
  }
};
const destroy = async (req, res, next) => {
  try {
    await tables.user.delete(req.params.id);
    res.status(204).send(`utilisateur supprimé: ${req.params.id}`);
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
