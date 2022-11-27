import React from "react";
import Homepage from "../Components/Homepage";
import Recipes from "../Components/Recipes";
import Searched from "./Searched";
import Cuisine from "./Cuisine";
import Authentication from "../Components/Authentication";
import RecipeInformation from "./RecipeInformation.js";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipes/:type" element={<Cuisine />} />
      <Route path="/Searched/:search" element={<Searched />} />
      <Route path="/Information/:name" element={<RecipeInformation />} />
      <Route path="/Authentication" element={<Authentication />} />
    </Routes>
  );
}

export default Pages;
