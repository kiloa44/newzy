import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SearchAppBar from "./components/SearchAppBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import "./firebase";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <SignIn></SignIn>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
