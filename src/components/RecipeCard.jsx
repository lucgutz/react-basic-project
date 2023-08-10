import {
  Stack,
  Image,
  Heading,
  Card,
  CardBody,
  Center,
  Text,
  Box,
} from "@chakra-ui/react";

import {
  Cautions,
  DietLabels,
  MealType,
  VeganVegetarianLabels,
} from "./Labels";

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <>
      <Card
        borderRadius="xl"
        w="sm"
        h="content-fit"
        cursor="pointer"
        borderColor="green.200"
        borderWidth="5px"
        onClick={() => onClick(recipe)}
        _hover={{
          transform: "scale(1.01)",
          borderColor: "green.500",
        }}
      >
        <CardBody textAlign="center">
          <Heading size="lg" marginBottom={2}>
            {recipe.recipe.label}
          </Heading>
          <Center>
            <VeganVegetarianLabels recipe={recipe}></VeganVegetarianLabels>
          </Center>

          <Stack mt="5" spacing="2">
            <Image src={recipe.recipe.image} h={64} w="sm" />
            <MealType recipe={recipe}></MealType>
            <Center>
              <Box>
                <DietLabels recipe={recipe}></DietLabels>
              </Box>
            </Center>
            <Box>
              <Text>
                Dish: <b>{recipe.recipe.dishType}</b>
              </Text>
            </Box>
            <Center>
              <Box>
                <Cautions recipe={recipe}></Cautions>
              </Box>
            </Center>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
