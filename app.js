const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRouters = require("./routes/feed");

const app = express();

//app.use(bodyParser.urlencoded()); //x-www-form-urlencoded
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRouters);

mongoose
  .connect(
    "mongodb+srv://naoyasu:kaisen29@cluster0-vleml.mongodb.net/network?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
