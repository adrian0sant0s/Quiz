import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./containers/welcome";
import Home from "./containers/home";

function RoutesNavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/init" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default RoutesNavigation;
