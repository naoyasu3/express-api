const express = require("express");
const bodyParser = require("body-parser");

const feedRouters = require("./routes/feed");

const app = express();

//app.use(bodyParser.urlencoded()); //x-www-form-urlencoded
app.use(bodyParser.json()); // application/json

app.use("/feed", feedRouters);

app.listen(8080);
