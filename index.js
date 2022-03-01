const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongodb atlas...");
  })
  .catch((err) => {
    console.log("Error has occured while connecting...", err);
  });

app.listen(PORT, () => {
  console.log("Server listening on port...");
});
