const UserData = require("../schema/userDataSchema");

const getUserData = async (req, res) => {
  const userData = await UserData.find();
  // console.log(userData)
  res.json(userData);
};

module.exports = getUserData;
