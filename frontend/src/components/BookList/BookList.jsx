import "./BookList.css";
import { useSelector } from "react-redux";
function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>Book List </h2>
      {books.length === 0 ? (
        <p> No Books available</p>
      ) : (
        <ul>
          {books.map((book, idx) => {
            return (
              <li key={idx}>
                <div className="book-info">
                  {`${++idx}. ${book.title} by `}
                  {<strong>{book.author}</strong>}
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
