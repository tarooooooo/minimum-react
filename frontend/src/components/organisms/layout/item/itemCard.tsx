import { Stack, Image, Text, Box, Img } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import ItemNoImage from '../../../../assets/item/no_image.png'

type Props = {
  id: string;
  itemName: string;
  itemPrice: number | null | undefined;
  image: string;
  dallEImage: string;
  onClick: (id: string) => void;
};

export const ItemCard: VFC<Props> = memo((props: Props) => {
  const { itemName ,itemPrice, onClick, id, image, dallEImage } = props;

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
        {dallEImage ? (
          <Img
            rounded='lg'
            boxSize="170px"
            src={dallEImage}
            alt={itemName}
            m="auto"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = ItemNoImage}
          />
        ) : 
        <Img
          rounded='lg'
          boxSize="170px"
          src={`https://minimum-react-image.s3.ap-northeast-1.amazonaws.com/uploads/item/image/${id}/image.png`}
          alt={itemName}
          m="auto"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = ItemNoImage}
        />
        }
        <Text fontSize="lg" fontWeight="bold">{itemName}</Text>
        <Text fontSize="sm" color="gray">{itemPrice}円</Text>
      </Stack>
    </Box>
  );
});
