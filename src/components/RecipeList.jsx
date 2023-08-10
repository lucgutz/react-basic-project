import { Flex, Box } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ recipes, onClick }) => {
  return (
    <>
      <Box paddingBottom={6}>
        <Flex gap={8} justifyContent="center" wrap="wrap">
          {recipes.map((recipe) => (
            <RecipeCard
              onClick={onClick}
              recipe={recipe}
              key={recipe.recipe.label}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
};
