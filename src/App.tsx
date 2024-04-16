import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routers";
import "./assets/css/style.css"

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
