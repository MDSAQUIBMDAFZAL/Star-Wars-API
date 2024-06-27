import { useState, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import CharacterList from "../components/CharacterList";
import Pagination from "../components/Pagination";

const Home = () => {
  const [characters, setCharacters] = useState([]);
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

  return (
    <Box maxW="1200px" mx="auto" p={4}>
      {isLoading ? <Spinner /> : <CharacterList characters={characters} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Box>
  );
};

export default Home;
