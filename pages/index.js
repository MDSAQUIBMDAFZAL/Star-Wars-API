import { useState, useEffect } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import CharacterList from "../components/CharacterList";
import Pagination from "../components/Pagination";
import FilmList from "../components/FilmList";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        setIsLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://swapi.dev/api/films/`)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
        setIsLoading(false);
      });
  }, []);

  return (
    <Box>
      <Box maxW="1200px" mx="auto" p={4}>
        <Text fontSize="2xl" fontWeight="bold" pt={16}>
          Favorite Characters
        </Text>
        {isLoading ? <Spinner /> : <CharacterList characters={characters} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Box>
      <Box maxW="1200px" mx="auto" p={4}>
        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          Favorite Films
        </Text>
        {isLoading ? <Spinner /> : <FilmList films={films} />}
      </Box>
    </Box>
  );
};

export default Home;
