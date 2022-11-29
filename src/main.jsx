import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./StyledComponents/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyles />
    <Routing />
  </BrowserRouter>
);
