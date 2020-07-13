import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SearchAppBar from "./components/SearchAppBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Interest from "./components/Interests";
import "./firebase";
import axios from "axios";
let Parser = require("rss-parser");
const parser = new Parser();

function App() {
  console.log("in app");
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <SignIn></SignIn>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/interests">
          <Interest></Interest>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
