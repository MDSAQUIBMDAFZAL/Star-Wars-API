import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const Navbar = () => (
  <Box bg="teal.500" p={4} position="fixed" width="100%" top="0" zIndex="1000">
    <Flex maxW="1200px" mx="auto" alignItems="center">
      <Heading size="md" color="white">
        Star Wars Characters
      </Heading>
      <Link href="/" passHref ml={4} color="white">
        Home
      </Link>
      <Link href="/favorites" passHref ml={4} color="white">
        Favorites
      </Link>
    </Flex>
  </Box>
);

export default Navbar;
