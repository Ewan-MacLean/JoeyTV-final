const express = require("express");
const getTags = require("../controllers/tagsController");

const router = express.Router();

router.get("/", getTags);
module.exports = router;
