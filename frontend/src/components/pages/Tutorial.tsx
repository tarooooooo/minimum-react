import { memo, useCallback, VFC } from "react";
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export const Tutorial: VFC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => navigate('/home'), []);

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        Comming soon ...
      </Heading>
      <Text color={'gray.500'} mt={6} mb={6}>
        こちらのページは準備中です。
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        _hover={{ cursor: "pointer" }} 
        onClick={onClickHome}
        >
        Go to Home
      </Button>
    </Box>
  )
});
