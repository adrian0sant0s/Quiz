import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Welcome from "./containers/welcome";
import CreateGlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Welcome />,
    <CreateGlobalStyle />
  </>
);
