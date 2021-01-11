import React from "react";
import { BookContext } from "./BooksApp";
import BookShelfChanger from "./BookShelfChanger";
const Book = ({ book, shelf }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        />
        <BookContext.Consumer>
          {(props) => (
            <BookShelfChanger onMove={props.onMove} book={book} shelf={shelf} />
          )}
        </BookContext.Consumer>
        
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(", ")}
      </div>
    </div>
  </li>
);
export default Book;
