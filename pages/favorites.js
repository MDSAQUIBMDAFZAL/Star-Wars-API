import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import CharacterList from "../components/CharacterList";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <Box maxW="1200px" mx="auto" p={4}>
      {favorites.length === 0 ? (
        <Text>No favorite characters.</Text>
      ) : (
        <CharacterList characters={favorites} />
      )}
    </Box>
  );
};

export default Favorites;
