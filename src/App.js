import React from "react";
import "./App.css";
import RegisterForm from "./components/register-form/registerForm";
import TodoApp from "./components/todo-landing-page/todoPage";
import Modal from "./components/modal-example/Modal"
import { BrowserRouter as Router,
Link,
Switch,
Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="layout">
      <Router>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Todo App</Link>
            </li>
            <li>
              <Link to="/form">Register Form</Link>
            </li>
            <li>
              <Link to="/modal">Modal Example</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <Switch>
          <Route exact path="/">
            <TodoApp />
          </Route>
          <Route  path="/form">
            <RegisterForm />
          </Route>
          <Route  path="/modal">
            <Modal />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
