// import files and packages up here
var morgan = require('morgan');
var express = require('express');
var data = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

console.log("Routes file loaded");
app.get('/', function(req, res) {
  res.status(200).send('Hello, World!');
});

app.get('/data', function(req, res) {
    console.log("Data route HIT");
  res.status(200).json(data);
});

// finally export the express application
module.exports = app;
