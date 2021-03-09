const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: Number, required: true },
  link: { type: String, required: true },

   });

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;