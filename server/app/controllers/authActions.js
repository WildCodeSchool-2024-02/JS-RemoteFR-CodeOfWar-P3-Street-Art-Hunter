const argon2 = require("argon2");

const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.mail);

    if (!user) {
      res.sendStatus(401);
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (verified) {
      delete user.hashed_password;

      res.json(user);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
