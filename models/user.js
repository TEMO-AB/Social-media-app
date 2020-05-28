const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName:{type:String, default:''},
    email:{type:String, required:true},
    password:{type:String, required:true},
    dateOfBirth:{type:Date, required:true}
    
  });


  const user = mongoose.model('user',userSchema)
  
  
  module.exports = user