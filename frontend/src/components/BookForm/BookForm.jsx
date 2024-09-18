import { useState } from "react";
import "./BookForm.css";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      //dispatch
      console.log(title, author);

      setTitle("");
      setAuthor("");
    }
  };
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
        </div>
      </form>
    </div>
  );
}

export default BookForm;
