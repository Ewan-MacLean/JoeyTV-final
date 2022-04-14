const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  // characters: [String],
  // content: [String],
  // genre: [String],
});

const Tags = mongoose.model("Tags", tagsSchema);
module.exports = Tags;
