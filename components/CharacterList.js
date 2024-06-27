import { SimpleGrid, Box } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => (
  <Box pt={88}>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </SimpleGrid>
  </Box>
);

export default CharacterList;
