const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { postUserLogin,} = require("./controller");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Handle user login
app.post("/login", postUserLogin);
module.exports = app;
