import React from "react";
import ReactDOM from "react-dom/client";
import RoutesNavigation from "./routes";

import CreateGlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RoutesNavigation />
    <CreateGlobalStyle />
  </>
);
