const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3,
  },
  age: {
    type: Number,
    min: 3,
    max: 20,
  },
});
module.exports = new mongoose.model("Author", authorSchema);
