import React from "react";
import Homepage from "../Components/Homepage";
import Recipes from "../Components/Recipes";
import Searched from "./Searched";
import Cuisine from "./Cuisine";
import Authentication from "../Components/Authentication";
import RecipeInformation from "./RecipeInformation.js";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipes/:type" element={<Cuisine />} />
        <Route path="/Searched/:search" element={<Searched />} />
        <Route path="/Information/:name" element={<RecipeInformation />} />
        <Route path="/Authentication" element={<Authentication />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
