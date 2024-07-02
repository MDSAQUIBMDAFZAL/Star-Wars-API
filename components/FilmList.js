import { SimpleGrid, Box } from "@chakra-ui/react";
import FilmCard from "./FilmCard";

const FilmList = ({ films }) => (
  <Box>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {films.map((film) => (
        <FilmCard key={film.url} film={film} />
      ))}
    </SimpleGrid>
  </Box>
);

export default FilmList;
