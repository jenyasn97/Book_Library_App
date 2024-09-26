const express = require("express");
const cors = require("cors");

const booksData = require("../frontend/src/data/books.json");

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  return randomBook;
}
const app = express();
app.use(cors());
app.get("/random-book", (req, res) => {
  res.json(getRandomBook());
});
app.get("/random-book-dalayed", (req, res) => {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  setTimeout(() => {
    res.json(getRandomBook());
  }, 5000);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
