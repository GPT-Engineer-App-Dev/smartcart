import { Box, Heading, Text, SimpleGrid, Image, Link, Select, VStack, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 299, category: "Electronics", rating: 4.5, image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 799, category: "Electronics", rating: 4.7, image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 199, category: "Accessories", rating: 4.2, image: "/images/headphones.jpg" },
];

const Index = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const filteredProducts = sampleProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedPrice === "" || (selectedPrice === "low" && product.price < 300) || (selectedPrice === "medium" && product.price >= 300 && product.price <= 700) || (selectedPrice === "high" && product.price > 700)) &&
      (selectedRating === "" || product.rating >= parseFloat(selectedRating))
    );
  });

  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>Welcome to E-Shop</Heading>
      <Text mb={6}>Your one-stop shop for the latest electronics.</Text>
      <VStack spacing={4} mb={6}>
        <HStack spacing={4}>
          <Select placeholder="Select category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </Select>
          <Select placeholder="Select price range" value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
            <option value="low">Below $300</option>
            <option value="medium">$300 - $700</option>
            <option value="high">Above $700</option>
          </Select>
          <Select placeholder="Select rating" value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
            <option value="4">4 stars & up</option>
            <option value="4.5">4.5 stars & up</option>
            <option value="5">5 stars</option>
          </Select>
        </HStack>
      </VStack>
      <Heading as="h2" size="lg" mb={4}>Featured Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
              <Text mb={2}>${product.price}</Text>
              <Text mb={2}>Rating: {product.rating}</Text>
              <Link as={RouterLink} to={`/products/${product.id}`} color="teal.500">View Details</Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;