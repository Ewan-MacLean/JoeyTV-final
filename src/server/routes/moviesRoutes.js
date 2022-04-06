const express = require("express");

const { getMovies, getMoviesById } = require("../controllers/moviesController");

const router = express.Router();

router.get("/:id", getMoviesById);
router.get("/", getMovies);

module.exports = router;
