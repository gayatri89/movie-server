const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  year: Number,
  genres: [],
  ageLimit: Number,
  rating: Number,
  actors: [
    {
      firstName: String,
      lastName:  String
    }
  ],
  director: {
    firstName: String,
    lastName: String
  },
  synopsis: String
});

module.exports = mongoose.model("Movie", movieSchema);
