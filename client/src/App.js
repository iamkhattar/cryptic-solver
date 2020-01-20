import React, { Fragment, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./components/header/Navbar";

import Landing from "./components/search/Landing";
import Solution from "./components/search/Solution";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import History from "./components/past-searches/History";

import uuid from "uuid";

//React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import { loadUser } from "./redux/actions/auth";
import setAuthToken from "./redux/utils/setAuthToken";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} key={uuid.v4()} />
          <Switch>
            <Route
              exact
              path="/solution"
              component={Solution}
              key={uuid.v4()}
            />
            <Route exact path="/login" component={Login} key={uuid.v4()} />
            <Route
              exact
              path="/register"
              component={Register}
              key={uuid.v4()}
            />
            <Route exact path="/history" component={History} key={uuid.v4()} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
