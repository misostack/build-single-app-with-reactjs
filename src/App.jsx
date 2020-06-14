import React from "react";
import "./App.scss";
import { default as routes } from "./App-routes";
const env = process.env;

function App() {
  return routes;
}

export default App;
