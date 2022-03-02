const express = require("express");
const router = express.Router();
const Book = require("../models/books");

//POST : Create a new book
router.post("/", (req, res) => {
  const books = new Book({
    name: req.body.name,
    // author: {
    //   name: req.body.authorName,
    //   age: req.body.authorAge,
    // },
    genre: req.body.genre,
  });
  books
    .save()
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
