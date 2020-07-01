const express = require("express");
const { Mongoose } = require("mongoose");
const postModel = require("../models/post");



const router = express.Router();

router.post("/post", async (req, res) => {
    try{
        await post.create({
            title: req.body.title,
            text: req.body.text,
            email: req.body.email,
          });
          res.send("post created")
    }catch (e) {
        console.log(e);
        throw e;
    }
  
});

router.get("/all", async (req, res) => {
    try {
        const data = await postModel.find({});
        console.log(data);
        res.json(data);
      } catch (e) {
        throw e;
      }

});

module.exports = router;
