import BookShelf from "./BookShelf";
import React from "react";
const BookCase = ({ bookshelves, books }) => {
  return (
    <div className="list-books-content">
      <div>
        {bookshelves.map((shelf) => (
          <BookShelf
            key={shelf.key}
            shelf={shelf}
            books={books.filter( book => book.shelf.includes(shelf.key))}
          />
        ))}
      </div>
    </div>
  );
};
export default BookCase;
