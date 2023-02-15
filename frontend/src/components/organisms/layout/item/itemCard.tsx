import { Stack, Image, Text, Box } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  id: string;
  imageUrl: string;
  itemName: string;
  itemPrice: number | null | undefined;
  image: string;
  onClick: (id: string) => void;
};

export const ItemCard: VFC<Props> = memo((props: Props) => {
  const { imageUrl, itemName ,itemPrice, onClick, id, image } = props;

  return (
    <Box 
        w="260px" 
        h="260px" 
        bg="white" 
        borderRadius="10px" 
        shadow="md"
        p={4}
        _hover={{cursor: "pointer", opacity: 0.8 }}
        onClick= {() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image 
          rounded='lg'
          boxSize="170px"
          src={`data:image/png;base64,${image}`}
          alt={itemName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">{itemName}</Text>
        <Text fontSize="sm" color="gray">{itemPrice}円</Text>
      </Stack>
    </Box>
  );
});
