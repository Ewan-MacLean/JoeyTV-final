const { request, response } = require("express");
const { validationResult } = require("express-validator");
const UserComments = require("../schema/userCommentsSchema");

const getUserComments = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const userComments = await UserComments.find();
    // console.log(userComments)
    response.json(userComments);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const postUserComments = async (request, response) => {
  try {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    // response.status(200).json({
    //   success: "ok",
    // });
    const userComments = await UserComments.create(request.body);
    response.json(userComments);
    console.log(request.body);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

module.exports = { getUserComments, postUserComments };
