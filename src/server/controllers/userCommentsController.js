const UserComments = require("../schema/userCommentsSchema");

const getUserComments = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const userComments = await UserComments.find();
    // console.log(userComments);
    res.json(userComments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const postUserComments = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const userComments = await UserComments.create(req.body);
    res.json(userComments);
    console.log(req.body);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getUserComments, postUserComments };
