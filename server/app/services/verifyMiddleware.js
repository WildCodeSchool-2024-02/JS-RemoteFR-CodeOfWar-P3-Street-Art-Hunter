const Joi = require("joi");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

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

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename(req, file, cb) {
    const id = uuidv4();
    console.info("uuid", id);
    const pictureName = `${id}${path.extname(file.originalname)}`;
    req.body.avatar = pictureName;
    cb(null, pictureName);
  },
});

const uploadPicture = (req, res, next) => {
  const upload = multer({ storage });
  return upload.single("avatar")(req, res, next);
};

module.exports = {
  verifyFields,
  uploadPicture,
};
