import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Box, Text, Spinner, Image } from "@chakra-ui/react";

const FilmDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [film, setFilm] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://swapi.dev/api/films/${id}/`)
        .then((response) => response.json())
        .then((data) => setFilm(data));
    }
  }, [id]);

  if (!film) {
    return <Spinner />;
  }

  const filmImage = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;

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
        <Image
          src={filmImage}
          alt={film.title}
          borderRadius="md"
          mb={4}
          objectFit="cover"
          boxSize="200px"
          mx="auto"
        />
        <Text fontSize="2xl" fontWeight="bold">
          {film.title}
        </Text>
        <Text>Director: {film.director}</Text>
        <Text>Producer: {film.producer}</Text>
        <Text>Release Date: {film.release_date}</Text>
        <Text>Opening Crawl: {film.opening_crawl}</Text>
      </Box>
    </Box>
  );
};

export default FilmDetail;
