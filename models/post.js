const mongoose = require("mongoose");



const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
  },
  { timestamps: true }
);


const post = mongoose.model("post", postSchema);

module.exports = post;
