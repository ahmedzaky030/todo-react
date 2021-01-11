import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./BooksApp.css";
import { Route } from "react-router-dom";
import BookSearch from "./BookSearch";
import ListBooks from "./ListBooks";
import { debounce } from "throttle-debounce";


export const BookContext = React.createContext({
  onMove: (book, shelf) => {},
  name: 'Ahmed'
})

class BooksApp extends Component {
  bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Have Read" },
  ];

  state = {
    books: [],
    searchBooks: [],
  };

  searchForBooks = debounce(1000, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
          this.setState({ searchBooks: books });
      });
    }
  });

  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  onMove = (book, shelf) => {
    BooksAPI.update(book, shelf).then(result => {
      let updatedBooks = [];
      updatedBooks = this.state.books.filter((b) => b.id !== book.id);
  
      if (shelf !== "none") {
        book.shelf = shelf;
        updatedBooks = updatedBooks.concat(book);
      }
  
      this.setState({
        books: updatedBooks,
      });
    });
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  };

  render() {
    const { books, searchBooks } = this.state;

    return (
      <div className="app">
        <Route
          path="/books/search/"
          render={() => (
            <BookContext.Provider value={{onMove: this.onMove.bind()}}>
<BookSearch
              books={searchBooks}
              onMove={this.onMove}
              onSearch={this.searchForBooks}
              onResetSearch={this.resetSearch}
              myBooks={books}
            />
            </BookContext.Provider>
            
          )}
        />
        <Route
          path="/books/"
          exact
          render={() => (
            <BookContext.Provider value={{onMove: this.onMove.bind()}}>
              <ListBooks
                bookshelves={this.bookshelves}
                books={books}
              />
            </BookContext.Provider>
          )}
        />
      </div>
    );
  }
}
export default BooksApp;
