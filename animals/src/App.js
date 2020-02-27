import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import AnimalDashboard from "./components/AnimalDashboard.js";
import Header from "./components/Header.js";
import PrivateRoute from "./utils/PrivateRoute.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello from the App.js file!</h1>
      <Switch>
        <PrivateRoute exact path="/creatures" component={AnimalDashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
