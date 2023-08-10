import { TextInput } from "../components/ui/TextInput";
import { RecipeList } from "../components/RecipeList";
import { data } from "../utils/data";
import { useState } from "react";
import { Center } from "@chakra-ui/react";

export const RecipeListPage = ({ onClick }) => {
  // console.log(data.hits[0].recipe.totalNutrients.ENERC_KCAL.quantity);
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <Center
        p={4}
        fontWeight="bold"
        fontSize={["30px", "30px", "50px"]}
        color="green.500"
      >
        <h1>Winc Recipe Checker</h1>
      </Center>
      <Center paddingBottom={4}>
        <TextInput onChange={handleChange} />
      </Center>

      <RecipeList recipes={matchedRecipes} onClick={onClick} />
    </>
  );
};
