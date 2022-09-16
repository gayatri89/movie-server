const movieService = require("../services/MovieService");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovie();
    res.json({ data: movies, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message + 'here' });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.json({ data: movie, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};