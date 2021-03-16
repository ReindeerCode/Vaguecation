import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Pages/LandingPage";
import About from "./Components/Pages/AboutPage";
import RandomCards from "./Components/Pages/RandomizePage";
import Contact from "./Components/Pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/about" exact component={About} />
          <Route path="/randomize" exact component={RandomCards} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
