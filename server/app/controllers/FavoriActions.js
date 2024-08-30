// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all favoris from the database
    const favoris = await tables.favori.readAll();

    // Respond with the favoris in JSON format
    res.json(favoris);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific favori from the database based on the provided ID
    const favori = await tables.favori.read(req.params.id);

    // If the favori is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the favori in JSON format
    if (favori == null) {
      res.sendStatus(404);
    } else {
      res.json(favori);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the favori data from the request body
  const favori = req.body;

  try {
    // Insert the favori into the database
    const insertId = await tables.favori.create(favori);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted favori
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
