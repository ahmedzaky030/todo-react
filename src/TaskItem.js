import React, { useRef, useState } from "react";
import "./TaskItem.css";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskItem = ({ number, title, description, update , tasks }) => {
  const [isEditMode, updateEditMode] = useState(false);
  const textTitleInput = useRef(null);
  const textDescriptionInput = useRef(null);
  
  function editTask(){
      updateEditMode(true);
  };

  function saveTask(){
    updateEditMode(false);
    tasks[number - 1].title = textTitleInput.current.value;
    tasks[number - 1].description = textDescriptionInput.current.value;
    update([...tasks]);
  }

  function cancel(){
    updateEditMode(false);
  }

  function deleteTask() {
    let newTasks = tasks.filter(t => t.title !== title);
    update(newTasks);
  }

  return (
    <div
      key={number}
      className="task-item d-flex flex-row justify-content-between"
    >
      <div className="task-def col-8   d-flex flex-column">
        {
          isEditMode ? 
          <input type="text" ref={textTitleInput} defaultValue={title} />
          : 
          <h3> {title} </h3>
        }
        
        {
          isEditMode ? 
          <input type="text" ref={textDescriptionInput}  defaultValue= {description} /> 
          :
          <p> {description} </p>
        }
        
      </div>
      <div className="actions col-4 d-flex flex-row">
        {!isEditMode ? (
          <div>
            <button onClick = {editTask} className="btn btn-primary w-100">
              <FontAwesomeIcon icon={faPencilAlt} />
              Edit
            </button>
            <button onClick = {deleteTask} className="btn btn-danger w-100">
              <FontAwesomeIcon icon={faTrash} />
              Delete
            </button>
          </div>
        ) : (
          <div>
            <button onClick= {saveTask} className="btn btn-success w-100">
              <FontAwesomeIcon icon={faPencilAlt} />
              Save
            </button>
            <button onClick={cancel} className="btn btn-secondary w-100">
              <FontAwesomeIcon icon={faPencilAlt} />
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export default TaskItem;
