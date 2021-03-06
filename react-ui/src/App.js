import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

import FlowerForm from "./Components/FlowerForm";
import ShowResults from "./Components/ShowResults";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css";

function App(props) {
  //runs once after the first rendering of page
  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios
  //       .get(apiUrl)
  //       .then((result) => {
  //         console.log("result.data:", result.data);
  //         setData(result.data);
  //         setShowLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log("error in fetchData:", error);
  //       });
  //   };
  //   fetchData();
  // }, []);

  return (
    <Router>
      <div class="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              Assignment 4
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ">
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    FlowerForm
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/">
          <Redirect to="/flowerForm" />
        </Route>
        <div>
          <Route path="/flowerForm" render={() => <FlowerForm />} />
          <Route path="/showResults" render={() => <ShowResults />} />
        </div>
      </div>
      <div>
        <footer
          id=""
          className="py-3 bg-light text-primary-50 fixed-bottom"
        >
          <div className="container text-center">
            <small>Copyright &copy; Arshdeep-Jashanjot-Assignment4</small>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
