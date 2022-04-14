const Tags = require("../schema/tagsSchema");

const getTags = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.params);

  const tags = await Tags.find();
  res.json(tags);
};

module.exports = getTags;
