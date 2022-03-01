const express = require("express");
const mongoose = require("mongoose");
const books = require("./models/books");
require("dotenv").config();
const app = express();
const booksRoute = require("./routes/bookspage");

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/bookspage", booksRoute);
//connect to mongodb atlas
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
