import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BlueNav from "./Components/BlueNav";
import BlueFooter from "./Components/BlueFooter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Pages/Landing";
import Contact from "./Components/Pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <BlueNav />
        <Switch>
          <Route path="/" exact component={Landing} />
          {/* <Route path="/what" component={What} />
        <Route path="/randomize" component={Randomize} /> */}
          <Route path="/contact" component={Contact} />
        </Switch>
        <BlueFooter />
      </Router>
    </>
  );
}

export default App;
