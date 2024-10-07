const login = async (req, res, next) => {
  try {
    res
      .cookie("auth", req.token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        message: "Connexion réussie",
        id: req.user.id,
        pseudo: req.user.pseudo,
        mail: req.user.mail,
        isAdmin: req.user.isAdmin,
      });
  } catch (error) {
    next(error);
  }
};

const isLogged = async (req, res, next) => {
  try {
    const user = {
      id: req.decoded.id,
      pseudo: req.decoded.pseudo,
      mail: req.decoded.mail,
      isAdmin: req.decoded.isAdmin,
    };
    res.status(200).send(user);
  } catch (error) {
    next();
  }
};

module.exports = { login, isLogged };
