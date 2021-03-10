import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Header />
        <Switch>
          <Route exact path={["/", "/Search"]} component={Search} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
