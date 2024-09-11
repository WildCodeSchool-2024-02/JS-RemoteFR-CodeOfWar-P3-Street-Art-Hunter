const login = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "Connexion réussie",
      id: req.user.id,
      pseudo: req.user.pseudo,
      mail: req.user.mail,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
