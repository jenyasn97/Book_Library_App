import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_book } from "../../redux/slices/booksSlice";
import { randomNumber, createBookWithId } from "../../utils/index";
import booksData from "../../data/books.json";
import "./BookForm.css";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(
        add_book(
          createBookWithId({
            title: title,
            author: author,
          })
        )
      );
      setTitle("");
      setAuthor("");
    }
  };

  function handleAddRandomBook() {
    dispatch(
      add_book(
        createBookWithId({ ...booksData[randomNumber(0, booksData.length)] })
      )
    );
  }

  return (
    <div className="app-block book-form">
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />

          <button type="submit">Add Book</button>
          <button type="button" onClick={handleAddRandomBook}>
            Add Random
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
