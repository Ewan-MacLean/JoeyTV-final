const express = require("express");
const connectToDatabase = require("./db");
const app = express();
const multer = require("multer");
const upload = multer();
require("dotenv").config();
const mongoose = require("mongoose");
const tagsRoutes = require("./routes/tagsRoutes");
const moviesRoutes = require("./routes/moviesRoutes");
const userCommentsRoutes = require("./routes/userCommentsRoutes");
const userDataRoutes = require("./routes/userDataRoutes");
const cors = require("cors");
app.use(express.json());

connectToDatabase(process.env.MONGO_URI);

app.options("*", cors());

app.use("/movies", moviesRoutes);

app.use("/userComments", userCommentsRoutes);

app.use("/userData", userDataRoutes);

app.use("/tags", tagsRoutes);

const PORT = 8888;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
