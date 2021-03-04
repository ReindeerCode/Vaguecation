import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BlueNav from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <BlueNav />
        <Switch>
          {/* <Route path="/" exact component={Landing} />
        <Route path="/what" component={What} />
        <Route path="/randomize" component={Randomize} />
        <Route path="/contact" component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
