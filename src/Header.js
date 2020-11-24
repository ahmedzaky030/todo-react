import React, { useRef } from "react";
import "./Header.css";


function Header({tasks , updateTask}) {
  const textInput = useRef(null);

  function addTask(arr = []) {
    let valueTitle = textInput.current.value;
    updateTask([...tasks,{title:valueTitle, description:"....."}]);
    textInput.current.value = '';
  }


  return (
    <div className="header">
      <label
        htmlFor="title"
        className="d-flex flex-row justify-content-between"
      >
        <input
          className="form-control"
          id="title"
          placeholder="type to add task ....."
          ref = { textInput }
        />
        <button onClick= {() => addTask(tasks , textInput)} className="btn btn-primary">
          Add
        </button>
      </label>
    </div>
  );
}



export default Header;
