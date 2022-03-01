const express = require("express");
const router = express.Router();
const Book = require("../models/books");

//POST : Create a new book
router.post("/", (req, res) => {
  book = new Book({
    name: req.body.bookName,
    author: {
      name: req.body.authorName,
      age: req.body.authorAge,
    },
    genre: req.body.genre,
  });
  book
    .save()
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send("Book was not created successfully...");
    });
});

module.exports = router;
