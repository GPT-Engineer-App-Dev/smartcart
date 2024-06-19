import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", description: "A high-quality smartphone with a sleek design.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$799", description: "A powerful laptop for all your computing needs.", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones for an immersive experience.", image: "/images/headphones.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} mb={4} />
      <Heading as="h1" mb={4}>{product.name}</Heading>
      <Text fontSize="xl" mb={4}>{product.price}</Text>
      <Text mb={4}>{product.description}</Text>
      <Button colorScheme="teal">Add to Cart</Button>
    </Box>
  );
};

export default ProductDetail;