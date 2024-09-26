import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { add_book, fetchbook } from "../../redux/slices/booksSlice";
import { randomNumber, createBookWithId } from "../../utils/index";
import { setError } from "../../redux/slices/errorSlice";
import booksData from "../../data/books.json";
import "./BookForm.css";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    } else {
      dispatch(setError("You must fill title and author"));
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
      setIsLoading(true);
      await dispatch(fetchbook("http://localhost:4000/random-book-dalayed"));
    } finally {
      setIsLoading(false);
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

          <button
            type="button"
            onClick={handleAddRandomBookViaApi}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span>Book Loading .....</span>
                <FaSpinner className="spinner" />
              </>
            ) : (
              "Add Random via API"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
