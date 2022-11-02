import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./containers/welcome";
import Home from "./containers/home";

import CreateGlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Home />,
    <CreateGlobalStyle />
  </>
);
