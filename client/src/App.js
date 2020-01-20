import React, { Fragment } from "react";
import "./App.css";

// Components
import Navbar from "./components/header/Navbar";

import Landing from "./components/search/Landing";
import Solution from "./components/search/Solution";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import History from "./components/past-searches/History";

//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/solution" component={Solution} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/history" component={History} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
