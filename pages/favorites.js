import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import CharacterList from "../components/CharacterList";
import FilmList from "../components/FilmList";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const favoriteCharacters = favorites.filter(
    (fav) => fav.type === "character"
  );
  const favoriteFilms = favorites.filter((fav) => fav.type === "film");

  return (
    <Box maxW="1200px" mx="auto" pt={12}>
      {favorites.length === 0 ? (
        <Text>No favorite items.</Text>
      ) : (
        <>
          {favoriteCharacters.length > 0 && (
            <>
              <Text fontSize="2xl" fontWeight="bold" mt={8}>
                Favorite Characters
              </Text>
              <CharacterList characters={favoriteCharacters} />
            </>
          )}
          {favoriteFilms.length > 0 && (
            <>
              <Text fontSize="2xl" fontWeight="bold" mt={8}>
                Favorite Films
              </Text>
              <FilmList films={favoriteFilms} />
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default Favorites;
