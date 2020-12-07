import React from "react";
import "./App.css";
import RegisterForm from "./components/register-form/registerForm";
import TodoApp from "./components/todo-landing-page/todoPage";
import Modal from "./components/modal-example/Modal";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import AppTodo from "./components/omar-todo/AppTodo";
import BooksApp from "./components/omar-bookAppApi/BooksApp";
//AppTodo

function App() {
  return (
    <div className="layout">
      <Router>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "#fa923f" }}
                activeStyle={{ color: "white", textDecoration: "none" }}
                to="/ahmed"
              >
                Todo App
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "#fa923f" }}
                activeStyle={{ color: "white", textDecoration: "none" }}
                to="/form"
              >
                Register Form
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "#fa923f" }}
                activeStyle={{ color: "white", textDecoration: "none" }}
                to="/modal"
              >
                Modal Example
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "#fa923f" }}
                activeStyle={{ color: "white", textDecoration: "none" }}
                to="/todo"
              >
                omar todo
              </NavLink>
            </li>
            <li>
              <NavLink 
                style={{ textDecoration: "none", color: "#fa923f" }}
                activeStyle={{ color: "white", textDecoration: "none" }}
                exact
                to="/books"
              >
                omar bookApi
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/ahmed">
            <TodoApp />
          </Route>
          <Route path="/form">
            <RegisterForm />
          </Route>
          <Route path="/modal">
            <Modal />
          </Route>
          <Route path="/todo">
            <AppTodo />
          </Route>
          <Route path="/books/">
            <BooksApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
