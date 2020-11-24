import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import TaskItem from "./TaskItem";
import tasks from "./tasks.json";

// const taskItems = tasks.map((v, i) => (
//   <TaskItem key={i+1} number={i + 1} title={v.title} description={v.description} />
// ));
function App() {
  const [tasksArr, updateTask] = useState([...tasks]);
  let taskItems = tasksArr.map((v, i) => (
    <TaskItem key={i+1} number={i + 1} title={v.title} description={v.description} update={updateTask} tasks={tasksArr} />
  ));
  useEffect(() => {
    taskItems = tasks.map((v, i) => (
      <TaskItem key={i+1} number={i + 1} title={v.title} description={v.description} update={updateTask} tasks={tasksArr} />
    ));
  }, [tasksArr]);
  return (
    <div className="layout">
      <div className="todo-container">
        <Header tasks={tasksArr} updateTask={updateTask} />
        <div className="tasks d-flex flex-column justify-content-center">
          {taskItems}
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
