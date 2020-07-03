const express = require("express");
const { Mongoose } = require("mongoose");
const postModel = require("../models/post");



const router = express.Router();

router.post("/", async (req, res) => {
    try{
        await postModel.create({
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

router.delete("/:id", async(req,res) => {
try {

  const id = req.params.id 

    const existingPost = await postModel.findById(id)

    if(existingPost) {
      await postModel.findByIdAndDelete(id)
      res.send('post deleted')
    } else {
      res.send('post does not exist')
    }
    
} catch (e) {
  send.json(e)
  throw e;
}
});


module.exports = router;
