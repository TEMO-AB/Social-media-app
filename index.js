const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Loading env vars from .env
const dotenv = require("dotenv");
dotenv.config();

// Craeting the server instance
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./controlers/user");
// Connect to database
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connected to databse");
});

app.use("/user", userRouter);

// Start the server
app.listen(8000, function () {
  console.log("Server app listening on port 8000!");
});
