import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState("");

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} onClick={setSelectedRecipe} />
      ) : (
        <>
          <RecipeListPage onClick={setSelectedRecipe} />
        </>
      )}
    </div>
  );
};
