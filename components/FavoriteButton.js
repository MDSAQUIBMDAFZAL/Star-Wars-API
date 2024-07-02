import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const FavoriteButton = ({ item, type }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (item && item.url) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.some((fav) => fav.url === item.url));
    }
  }, [item]);

  const handleFavoriteToggle = () => {
    if (item && item.url) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      if (isFavorite) {
        localStorage.setItem(
          "favorites",
          JSON.stringify(favorites.filter((fav) => fav.url !== item.url))
        );
      } else {
        favorites.push({ ...item, type });
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
      setIsFavorite(!isFavorite);
    }
  };

  if (!item || !item.url) {
    return null;
  }

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
