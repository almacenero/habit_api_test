const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

const homeRoute = require("./routes/home");
const drugRoute = require("./routes/drugs");

mongoose.connect(process.env.MONGO_DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", homeRoute);
app.use("/drugs", drugRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
