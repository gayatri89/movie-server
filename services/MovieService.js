const MovieModel = require("../models/Movie");

exports.getAllMovie = async () => {
  return await MovieModel.find();
};

exports.createMovie = async (movie) => {
  return await MovieModel.create(movie);
};
exports.getMovieByName = async (name) => {
  return await MovieModel.find(name);
};
