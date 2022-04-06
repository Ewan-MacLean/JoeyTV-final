const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  country: String,
  preferences: Array,
});

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;
