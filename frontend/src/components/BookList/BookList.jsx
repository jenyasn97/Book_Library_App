import "./BookList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreators";

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="app-block book-list">
      <h2>Book List </h2>
      {books.length === 0 ? (
        <p> No Books available</p>
      ) : (
        <ul>
          {books.map((book, idx) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {`${++idx}. ${book.title} by `}
                  {<strong>{book.author}</strong>}
                </div>
                <div className="book-actions">
                  <button
                    onClick={() => {
                      handleDeleteBook(book.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BookList;
