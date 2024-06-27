import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const FavoriteButton = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav) => fav.url === character.url));
  }, [character.url]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((fav) => fav.url !== character.url))
      );
    } else {
      favorites.push(character);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Button
      onClick={handleFavoriteToggle}
      mt={4}
      ml={4}
      colorScheme={isFavorite ? "red" : "gray"}
      borderRadius="30px"
    >
      {isFavorite ? "Unfavorite" : "Favorite"}
    </Button>
  );
};

export default FavoriteButton;
