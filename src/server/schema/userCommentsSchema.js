const mongoose = require("mongoose");

const userCommentsSchema = new mongoose.Schema({
  showId: Number,
  userId: String,
  movieTitle: String,
  review: String,
  rating: Number,
  ages: [String],
  tags: [String],
});

const UserComments = mongoose.model("UserComments", userCommentsSchema);

module.exports = UserComments;
