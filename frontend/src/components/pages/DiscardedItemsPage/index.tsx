import { Box, Stack, WrapItem, Text, Image, Wrap, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Item } from "../../../graphql/generated";

// task: itemsに適切な型をつける
export type DiscardedItemsPageProps = {
  items: any,
}

export const DiscardedItemsPage: React.VFC<DiscardedItemsPageProps> = memo(({
 items
}) => {
  return (
    <>
      <Heading color="gray" align="center" size='md' mt={5}>廃棄アイテム一覧</Heading>
      <Wrap p={{ base: 4, md: 10 }}>
        {items?.map((item: Item, index: number) => (
          <WrapItem key={index} mx="auto">
            <Box
              w="260px" 
              h="260px" 
              bg="white" 
              borderRadius="10px" 
              shadow="md"
              p={4}
              _hover={{cursor: "pointer", opacity: 0.8 }}
            >
              <Image 
                rounded='lg'
                boxSize="170px"
                src={"https://source.unsplash.com/random"}
                alt={item!.name}
                m="auto"
              />
              <Stack textAlign="center">
                <Text fontSize="lg" fontWeight="bold">{item!.name}</Text>
                <Text fontSize="sm" color="gray">{item!.price}</Text>
              </Stack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
});
