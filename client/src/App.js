import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Champion from "./pages/Champion";
import About from "./pages/About";
import "./App.css"

const App = () => (
  <Router>
    <div className="wholePage">
      <div className="styleContainer">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/champion/:id" component={Champion} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
