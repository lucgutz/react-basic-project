import {
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";

import {
  HealthLabels,
  DietLabels,
  Cautions,
  Nutrients,
  MealType,
} from "../components/Labels";

export const RecipePage = ({ item, onClick }) => {
  return (
    <>
      <Flex direction="column" align="center" justify="center">
        <Box
          marginLeft={20}
          marginRight={20}
          marginBottom={5}
          maxWidth="1280px"
        >
          <Image
            src={item.recipe.image}
            maxH="400px"
            w="100%"
            borderRadius="xl"
            objectFit="cover"
            paddingTop={4}
          ></Image>

          <Flex
            direction={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems={["center", "center", "flex-start"]}
            w="100%"
            flexWrap="wrap"
          >
            <Box
              w={["100%", "100%", "100%", "calc(50% - 10px)"]}
              display="flex"
              p={4}
            >
              <Stack mt="3">
                <MealType recipe={item}></MealType>
                <Heading size="md">{item.recipe.label}</Heading>
                <Text>
                  Total cooking time: <b>{item.recipe.totalTime} </b>minutes
                </Text>
                <Text>
                  Servings: <b>{item.recipe.yield} </b>
                </Text>
                <Text paddingTop={2} textDecoration="underline">
                  Ingredients:
                </Text>
                {item.recipe.ingredientLines.map((ingredient) => (
                  <p key={item.recipe.label}>{ingredient}</p>
                ))}
              </Stack>
            </Box>

            <Box
              w={["100%", "100%", "100%", "calc(50% - 10px)"]}
              display="flex"
              p={4}
            >
              <Stack mt="3">
                <HealthLabels recipe={item}></HealthLabels>
                <DietLabels recipe={item}></DietLabels>
                <Cautions recipe={item}></Cautions>
                <Box paddingTop={2}>
                  <Nutrients recipe={item}></Nutrients>
                </Box>
              </Stack>
            </Box>
          </Flex>
          <Button
            bg="white"
            textAlign="center"
            size="lg"
            w="100%"
            onClick={() => onClick()}
            backgroundColor="green.300"
            _hover={{ bg: "green.500" }}
          >
            Back to recipes
          </Button>
        </Box>
      </Flex>
    </>
  );
};
