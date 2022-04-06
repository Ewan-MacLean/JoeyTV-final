const express = require("express");

const {
  getUserComments,
  postUserComments,
} = require("../controllers/userCommentsController");

const router = express.Router();

router.get("/", getUserComments);
router.post("/", postUserComments);

module.exports = router;
