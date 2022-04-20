const { body } = require("express-validator");
const express = require("express");

const {
  getUserComments,
  postUserComments,
} = require("../controllers/userCommentsController");

const router = express.Router();

router.get("/", getUserComments);
router.post(
  "/",
  [
    body("review")
      .isLength({ min: 4, max: 300 })
      .withMessage("Review has to be at least 4 characters"),
    body("rating").not().isEmpty().withMessage("Rating has to be at least 1"),
    body("ages")
      .not()
      .isEmpty()
      .withMessage("Reccomend at least one age group"),
    body("tags").not().isEmpty().withMessage("Choose at least one tag"),
  ],
  postUserComments
);

module.exports = router;
