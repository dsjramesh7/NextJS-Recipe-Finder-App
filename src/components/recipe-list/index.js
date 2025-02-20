"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

const RecipeList = ({ recipeList }) => {
  console.log(recipeList);
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-red-400 mb-12">Recipes</h2>
      <Link href={"/"}>
        <Button className="bg-red-300 font-bold mb-3">HomePage</Button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((recipe) => (
            <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
              <Card>
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg w-full truncate text-gray-900">
                      {recipe.name}
                    </h3>
                    <div className="mt-4 flex items-center flex-wrap gap-2">
                      <p className="text-lg text-gray-600">{recipe.rating}</p>
                      <div className="ml-auto">
                        <p className="font-bold text-lg w-full truncate text-gray-900">
                          {recipe.cuisine}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <h3>No Recipes Data Present</h3>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
