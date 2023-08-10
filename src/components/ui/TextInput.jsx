import { Input, InputGroup, InputLeftElement, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const TextInput = ({ onChange }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <InputGroup width="auto">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          onChange={onChange}
          padding={5}
          fontSize="xl"
          paddingLeft={9}
          placeholder="Search for recipes"
          size="lg"
          variant="outline"
          border="solid"
          _hover={{ borderColor: "green.200" }}
        ></Input>
      </InputGroup>
    </Flex>
  );
};
