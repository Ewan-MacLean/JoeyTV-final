const Movies = require("../schema/movieSchema");

const getMoviesById = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.dir(req.params);

  const movies = await Movies.find({ id: req.params.id });
  // console.log(movies);
  res.json(movies);
};

const getMovies = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.dir(req.params);

  const movies = await Movies.find().limit(25);
  // console.log(movies);
  res.json(movies);
};

module.exports = { getMovies, getMoviesById };
