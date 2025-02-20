import RecipeDetails from "@/components/recipe-details";
import React from "react";

const apiFetchSingleRecipeFunction = async (recipeId) => {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${recipeId}`
    );
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const RecipeDetailsPage = async ({ params }) => {
  const id = params?.details;
  const singleRecipeData = await apiFetchSingleRecipeFunction(id);
  return <RecipeDetails singleRecipeData={singleRecipeData} />;
};

export default RecipeDetailsPage;
