import { Link } from "react-router-dom";
import React from "react";
const OpenSearchBtn = (props) => (
  <div className="open-search">
    <Link to="books/search">
      <button>Add a book</button>
    </Link>
  </div>
);
export default OpenSearchBtn;
