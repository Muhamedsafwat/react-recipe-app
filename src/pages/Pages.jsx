import HomePage from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Details from "./Details";

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cuisine/:category" element={<Cuisine />} />
        <Route path="/search/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
