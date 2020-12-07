import { Link } from "react-router-dom";
import React from "react";
const CloseSearchBtn = ({ onResetSearch }) => (
  <Link to="/books">
    <button className="close-search" onClick={onResetSearch}>
      Close
    </button>
  </Link>
);
export default CloseSearchBtn;
