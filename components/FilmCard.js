import { Box, Text, Button, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import FavoriteButton from "./FavoriteButton";

const FilmCard = ({ film }) => {
  const filmId = film.url.split("/").slice(-2, -1)[0];
  const filmImage = `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`;

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
        src={filmImage}
        alt={film.title}
        borderRadius="md"
        mb={4}
        objectFit="cover"
        boxSize="200px"
        mx="auto"
      />
      <Text fontSize="xl" fontWeight="bold">
        {film.title}
      </Text>
      <Text>Director: {film.director}</Text>
      <Text>Release Date: {film.release_date}</Text>
      <NextLink href={`/film/${filmId}`} passHref>
        <Button as="a" mt={4} colorScheme="teal" borderRadius="30px">
          View Details
        </Button>
      </NextLink>
      <FavoriteButton item={film} type="film" />
    </Box>
  );
};

export default FilmCard;
