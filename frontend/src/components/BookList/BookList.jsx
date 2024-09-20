import "./BookList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { selectTitleFilter } from "../../redux/slices/filterSlice";

import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";

function BookList() {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter);

  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const filtredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    return matchesTitle;
  });

  return (
    <div className="app-block book-list">
      <h2>Book List </h2>
      {books.length === 0 ? (
        <p> No Books available</p>
      ) : (
        <ul>
          {filtredBooks.map((book, idx) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {`${++idx}. ${book.title} by `}
                  {<strong>{book.author}</strong>}
                </div>
                <div className="book-actions">
                  {book.isFavorite ? (
                    <BsBookmarkStarFill
                      onClick={() => {
                        handleToggleFavorite(book.id);
                      }}
                      className="star-icon"
                    />
                  ) : (
                    <BsBookmarkStar
                      onClick={() => {
                        handleToggleFavorite(book.id);
                      }}
                      className="star-icon"
                    />
                  )}
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
