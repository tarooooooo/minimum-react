import { Stack, Image, Text, Box } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  imageUrl: string;
  itemName: string;
  itemPrice: number | null | undefined;
  onClick: () => void;
};

export const ItemCard: VFC<Props> = memo((props: Props) => {
  const { imageUrl, itemName ,itemPrice, onClick } = props;

  return (
    <Box 
        w="260px" 
        h="260px" 
        bg="white" 
        borderRadius="10px" 
        shadow="md"
        p={4}
        _hover={{cursor: "pointer", opacity: 0.8 }}
        onClick={onClick}
        >
          <Stack textAlign="center">
            <Image 
              borderRadius="full" 
              boxSize="160px" 
              src={imageUrl}
              alt={itemName}
              m="auto"
             />
             <Text fontSize="lg" fontWeight="bold">{itemName}</Text>
             <Text fontSize="sm" color="gray">{itemPrice}円</Text>
          </Stack>
        </Box>
  );
});
