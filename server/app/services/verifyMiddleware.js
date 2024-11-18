const Joi = require("joi");

const verifyFields = (req, res, next) => {
  const schema = Joi.object({
    lastname: Joi.string(),
    firstname: Joi.string(),
    pseudo: Joi.string().required(),
    mail: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};
const verifyPassword = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

module.exports = {
  verifyFields,
  verifyPassword,
};
