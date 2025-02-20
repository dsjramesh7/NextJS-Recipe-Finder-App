import RecipeList from "@/components/recipe-list";
import React from "react";

const apiFetchFunction = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    const recipesData = data?.recipes;
    return recipesData;
  } catch (error) {
    throw new Error(error);
  }
};

const Recipes = async () => {
  const recipeList = await apiFetchFunction();
  return <RecipeList recipeList={recipeList} />;
};

export default Recipes;
