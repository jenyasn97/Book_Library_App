import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_book } from "../../redux/slices/booksSlice";
import { randomNumber, createBookWithId } from "../../utils/index";
import booksData from "../../data/books.json";
import axios from "axios";
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
          createBookWithId(
            {
              title: title,
              author: author,
            },
            "manual"
          )
        )
      );
      setTitle("");
      setAuthor("");
    }
  };

  function handleAddRandomBook() {
    dispatch(
      add_book(
        createBookWithId(
          { ...booksData[randomNumber(0, booksData.length)] },
          "random"
        )
      )
    );
  }

  async function handleAddRandomBookViaApi() {
    try {
      const result = await axios("http://localhost:4000/random-book");
      if (result.data && result.data.title && result.data.author) {
        dispatch(add_book(createBookWithId(result.data, "API")));
      }
    } catch (e) {
      console.log("Error: ", e.message);
    }
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
          <button type="button" onClick={handleAddRandomBookViaApi}>
            Add Random via API
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
