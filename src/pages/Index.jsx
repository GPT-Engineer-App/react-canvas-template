import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your Blank Canvas</Heading>
        <Text fontSize="lg">Start building your amazing application here.</Text>
        <Box p={4} borderWidth={1} borderRadius="lg" width="100%" textAlign="center">
          <Text fontSize="md">This is a blank canvas for your React app. Use this space to create something incredible!</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;