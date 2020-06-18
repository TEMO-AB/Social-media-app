const express = require("express");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      res.send("user already exist!");
    } else {
      await user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        dateOfBirth: new Date(req.body.dateOfBirth),
      });
      res.send("user created !! ");
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await userModel.find({});
    console.log(data);
    res.json(data);
  } catch (e) {
    throw e;
  }
});

router.post("/login", async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (!existingUser) {
      res.send("This email does not have an account");
    } else {
      bcrypt.compare(req.body.password, existingUser.password, function (
        err,
        isMatch
      ) {
        if (err) {
          res.send("login failed");
          throw err;
        }
        if (isMatch) {
          res.send("you are logged in");
        } else {
          res.send("password does not match");
        }
      });
    }
  } catch (e) {
    throw e;
  }
});

module.exports = router;
