import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Cake from "./Pages/Cake";
import IceCream from "./Pages/IceCream";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <br></br>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Cake" component={Cake} />
          <Route path="/IceCream" component={IceCream} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
