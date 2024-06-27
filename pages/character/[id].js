import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";

const CharacterDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://swapi.dev/api/people/${id}/`)
        .then((response) => response.json())
        .then((data) => setCharacter(data));
    }
  }, [id]);

  if (!character) {
    return <Spinner />;
  }

  return (
    <Box position="relative" height="100vh" bg="gray.100">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        maxW="600px"
        w="100%"
        mx="auto"
        p={4}
        bg="teal.400"
        borderRadius="md"
        boxShadow="md"
      >
        <Text fontSize="2xl" fontWeight="bold">
          {character.name}
        </Text>
        <Text>Height: {character.height}</Text>
        <Text>Mass: {character.mass}</Text>
        <Text>Hair Color: {character.hair_color}</Text>
        <Text>Skin Color: {character.skin_color}</Text>
        <Text>Eye Color: {character.eye_color}</Text>
        <Text>Birth Year: {character.birth_year}</Text>
        <Text>Gender: {character.gender}</Text>
      </Box>
    </Box>
  );
};

export default CharacterDetail;
