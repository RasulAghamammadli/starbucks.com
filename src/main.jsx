// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Scroll To Top component
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.jsx";

// Style
import "./assets/sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
