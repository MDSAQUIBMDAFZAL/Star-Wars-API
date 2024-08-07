import { Box, Text, Button, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import FavoriteButton from "./FavoriteButton";

const CharacterCard = ({ character }) => {
  const characterId = character.url.split("/").slice(-2, -1)[0];
  const characterImage = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

  return (
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
      <Image
        src={characterImage}
        alt={character.name}
        borderRadius="md"
        mb={4}
        objectFit="cover"
        boxSize="200px"
        mx="auto"
      />
      <Text fontSize="xl" fontWeight="bold">
        {character.name}
      </Text>
      <Text>Height: {character.height}</Text>
      <Text>Birth Year: {character.birth_year}</Text>
      <NextLink href={`/characters/${characterId}`} passHref>
        <Button as="a" mt={4} colorScheme="teal" borderRadius="30px">
          View Details
        </Button>
      </NextLink>
      <FavoriteButton item={character} type="character" />
    </Box>
  );
};

export default CharacterCard;
