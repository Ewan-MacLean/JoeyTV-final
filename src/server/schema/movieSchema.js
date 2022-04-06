const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  id: Number,
  url: String,
  name: String,
  type: String,
  language: String,
  genres: [String],
  status: String,
  runtime: Number,
  averageRuntime: Number,
  premiered: String,
  ended: String,
  offcialSite: String,
  schedule: { time: String, days: [String] },
  rating: { average: String },
  weight: Number,
  network: {
    id: Number,
    name: String,
    country: { name: String, code: String, timezone: String },
  },
  webChannel: String,
  dvdCountry: String,
  externals: { tvrage: String, thetvdb: Number, imdb: String },
  image: { medium: String, original: String },
  summary: String,
  updated: Number,
  _links: { self: { href: String, previousepisode: { href: String } } },
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
