import React from "react";
import Homepage from "../Components/Homepage";
import Recipes from "../Components/Recipes";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipes/:type" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;
