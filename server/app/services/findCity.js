const { API_KEY } = process.env;

const findCity = async (req, res, next) => {
  try {
    const { lat, lon } = req.body;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
      {
        method: "GET",
      }
    );
    if (!response) {
      res.status(400).send("Wrong latitude & longitude");
    }
    const city = await response.json();

    res.status(200).json({ city: city.name, country: city.sys.country });
  } catch (error) {
    next(error);
  }
};

module.exports = { findCity };
