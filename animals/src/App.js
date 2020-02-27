import React from 'react';
import './App.css';

import Login from "./components/Login.js";
import {AnimalList} from "./components/AnimalsList.js";
import Header from "./components/Header.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello from the App.js file!</h1>
      <Login />
      <AnimalList />
    </div>
  );
};
