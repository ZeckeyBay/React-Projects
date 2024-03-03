import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
        <div key={index} className="border border-gray-300 rounded-md p-4">
          <h2 className="text-xl font-semibold mb-2">{recipe.recipe.label}</h2>
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className="w-full rounded-md mb-2"
          />
          <p className="text-gray-700">{recipe.recipe.source}</p>
          <a
            href={recipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            View Recipe
          </a>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
