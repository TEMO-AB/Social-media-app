const express = require('express');
const mongoose = require('mongoose');

// Loading env vars from .env
const dotenv = require('dotenv');
dotenv.config();

const user  = require('./models/user')

// Craeting the server instance
const app = express()

// Connect to database

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
   console.log('Connected to databse')
  });

// Congfireing endpoints
app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.get('/createUser',  async function (req, res) {

    await user.create({
        firstName:'Ayham',
        dateOfBirth: new Date(),
        email:'tamim@trest.de',
        password:'12345'
    });

    res.send('User created');
  });

  app.get('/allUsers', async function (req, res) {
    const users = await user.find()
    console.log(users)
    res.send('Hello hamada!');
  })





  // Start the server
  app.listen(8000, function () {
    console.log('Server app listening on port 8000!');
  });