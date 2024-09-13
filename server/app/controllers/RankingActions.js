const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAllScoreByOrder(req.query.q);

    if (users.length === 0) {
      res.json({
        message: "Users not found",
        result: users,
      });
    } else {
      res.json({ result: users });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
