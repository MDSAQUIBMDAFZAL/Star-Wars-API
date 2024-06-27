import { Box, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import FavoriteButton from "./FavoriteButton";

const CharacterCard = ({ character }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={4}
    _hover={{
      backgroundColor: "teal.400",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      borderColor: "teal.400",
    }}
    transition="background-color 0.3s ease-in-out"
  >
    <Text fontSize="xl" fontWeight="bold">
      {character.name}
    </Text>
    <Text>Height: {character.height}</Text>
    <Text>Mass: {character.mass}</Text>
    <Text>Hair Color: {character.hair_color}</Text>
    <NextLink
      href={`/character/${character.url.split("/").slice(-2, -1)[0]}`}
      passHref
    >
      <Button as="a" mt={4} colorScheme="teal" borderRadius="30px">
        View Details
      </Button>
    </NextLink>
    <FavoriteButton character={character} />
  </Box>
);

export default CharacterCard;