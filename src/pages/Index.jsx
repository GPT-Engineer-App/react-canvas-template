import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your Blank Canvas</Heading>
        <Text fontSize="lg">Start building your amazing application here.</Text>
        <Box p={4} borderWidth={1} borderRadius="lg" width="100%" textAlign="center">
          <Text fontSize="md">This is a blank canvas for your React app. Use this space to create something incredible!</Text>
        </Box>
      {session ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button onClick={() => navigate('/login')}>Login</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;