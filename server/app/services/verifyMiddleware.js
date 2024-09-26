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


const storageAvatar = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads/avatars");
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
  const upload = multer({ storage: storageAvatar });
  return upload.single("avatar")(req, res, next);
};

module.exports = {
  verifyFields,
};
