const argon2 = require("argon2");

const tables = require("../../database/tables");

const compareLogin = async (req, res, next) => {
  try {
    const { mail, password } = req.body;
    const user = await tables.user.readByEmailWithPassword(mail);

    if (!user) {
      res.sendStatus(401);
    }

    req.user = {
      id: user.id,
      pseudo: user.pseudo,
      mail: user.mail,
    };

    const verified = await argon2.verify(user.hashed_password, password);

    if (!verified) {
      res.sendStatus(401);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { compareLogin };
