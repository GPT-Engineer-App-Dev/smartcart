import { Box, Flex, Link, Spacer, Text, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          E-Shop
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>
          Products
        </Link>
      <InputGroup maxW="300px" mx={2}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery} 
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }} 
            color="white"
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default Navbar;