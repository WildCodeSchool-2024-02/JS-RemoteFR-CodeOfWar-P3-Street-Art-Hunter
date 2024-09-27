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

const storageArtwork = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename(req, file, cb) {
    const artworkId = uuidv4();
    const artworkName = `${artworkId}${path.extname(file.originalname)}`;
    req.body.image_url = artworkName;
    cb(null, artworkName);
  },
});

const uploadArtwork = async (req, res, next) => {
  const upload = await multer({ storage: storageArtwork });
  return upload.single("image_url")(req, res, next);
};
const storageAvatar = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads/avatars");
  },
  filename(req, file, cb) {
    const avatarId = uuidv4();
    const pictureName = `${avatarId}${path.extname(file.originalname)}`;
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
  uploadPicture,
  uploadArtwork,
};

