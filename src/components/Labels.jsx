import { Tag, Flex, Text, Box } from "@chakra-ui/react";

export const VeganVegetarianLabels = ({ recipe }) => {
  return (
    <>
      <Flex gap={2} wrap="wrap">
        {recipe.recipe.healthLabels.map((label) => {
          if (label === "Vegetarian" || label === "Vegan") {
            return (
              <Tag
                textTransform="uppercase"
                key={recipe.recipe.label}
                backgroundColor="yellow.200"
              >
                {label}
              </Tag>
            );
          }
        })}
      </Flex>
    </>
  );
};

export const HealthLabels = ({ recipe }) => {
  return (
    <>
      <Text fontSize="md">Health labels:</Text>
      <Flex flexWrap="wrap" gap={2}>
        {recipe.recipe.healthLabels.map((label) => {
          if (label !== "Vegetarian" || label !== "Vegan") {
            return (
              <>
                <Tag
                  textTransform="uppercase"
                  key={recipe.recipe.label}
                  backgroundColor="yellow.200"
                >
                  {label}
                </Tag>
              </>
            );
          }
        })}
      </Flex>
    </>
  );
};

export const DietLabels = ({ recipe }) => {
  return (
    <>
      {recipe.recipe.dietLabels.length > 0 && (
        <div>
          <Text fontSize="md">Diet:</Text>
          <Flex gap={2}>
            {recipe.recipe.dietLabels.map((label) => (
              <Tag
                key={recipe.recipe.label}
                bg="green.100"
                textTransform="uppercase"
              >
                {label}
              </Tag>
            ))}
          </Flex>
        </div>
      )}
    </>
  );
};

export const Cautions = ({ recipe }) => {
  return (
    <>
      {recipe.recipe.cautions.length > 0 && (
        <div>
          <Text fontSize="md">Cautions:</Text>
          <Flex gap={2}>
            {recipe.recipe.cautions.map((caution) => (
              <Tag
                key={recipe.recipe.label}
                bg="red.100"
                textTransform="uppercase"
              >
                {caution}
              </Tag>
            ))}
          </Flex>
        </div>
      )}
    </>
  );
};

export const MealType = ({ recipe }) => {
  return (
    <>
      {recipe.recipe.mealType.map((mealtype) => (
        <>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontStyle="italic"
            color="green.700"
          >
            {mealtype}
          </Text>
        </>
      ))}
    </>
  );
};

export const Nutrients = ({ recipe }) => {
  return (
    <>
      <Text fontWeight="bold" fontSize="lg" textDecoration="underline">
        Total nutrients
      </Text>
      <Flex gap={7} flexWrap="wrap">
        <Box>
          <Text fontWeight="bold" textTransform="uppercase">
            {recipe.recipe.totalNutrients.ENERC_KCAL.label}{" "}
          </Text>
          <Text>
            {recipe.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)}{" "}
            {recipe.recipe.totalNutrients.ENERC_KCAL.unit}{" "}
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" textTransform="uppercase">
            {recipe.recipe.totalNutrients.CHOCDF.label}{" "}
          </Text>
          <Text>
            {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)}{" "}
            {recipe.recipe.totalNutrients.CHOCDF.unit}{" "}
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" textTransform="uppercase">
            {recipe.recipe.totalNutrients.PROCNT.label}{" "}
          </Text>
          <Text>
            {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(0)}{" "}
            {recipe.recipe.totalNutrients.PROCNT.unit}{" "}
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" textTransform="uppercase">
            {recipe.recipe.totalNutrients.FAT.label}{" "}
          </Text>
          <Text>
            {recipe.recipe.totalNutrients.FAT.quantity.toFixed(0)}{" "}
            {recipe.recipe.totalNutrients.FAT.unit}{" "}
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" textTransform="uppercase">
            {recipe.recipe.totalNutrients.CHOLE.label}{" "}
          </Text>
          <Text>
            {recipe.recipe.totalNutrients.CHOLE.quantity.toFixed(0)}{" "}
            {recipe.recipe.totalNutrients.CHOLE.unit}{" "}
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold" textTransform="uppercase">
            {recipe.recipe.totalNutrients.NA.label}{" "}
          </Text>
          <Text>
            {recipe.recipe.totalNutrients.NA.quantity.toFixed(0)}{" "}
            {recipe.recipe.totalNutrients.NA.unit}{" "}
          </Text>
        </Box>
      </Flex>
    </>
  );
};
