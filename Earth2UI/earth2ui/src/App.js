import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/footer";
import Search from "./Components/Search";
import Lobby from "./Components/Lobby";
import Match from "./Components/Match";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import "./index.css";

function App() {
  return (
    <Router>
      <div id="uiDesign">
        <NavBar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Route path="/lobby" exact component={Lobby}></Route>
        <Route path="/match" exact component={Match}></Route>
        <Route path="/feedback" exact component={Feedback}></Route>
        <Route path="/about" exact component={About}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
