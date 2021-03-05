import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBarComponent";
import Landing from "./Components/Pages/LandingPage";
import About from "./Components/Pages/AboutPage";
import RandomCards from "./Components/Pages/RandomizePage";
import Contact from "./Components/Pages/ContactPage";
import Footer from "./Components/FooterComponent";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/randomize" component={RandomCards} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
