import { Box, Stack, WrapItem, Text, Image, Wrap, Heading } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useDiscardedItemsPageQuery } from "../../../graphql/generated";

export const DiscardedItemsPage: VFC = memo(() => {
  const { data } = useDiscardedItemsPageQuery()
  const items = data?.discardedItems?.edges?.map((item) => {
    return (item?.node)
  })

  return (
    <>
      <Heading color="gray" align="center" size='md' mt={5}>廃棄アイテム一覧</Heading>
      <Wrap p={{ base: 4, md: 10 }}>
        {items?.map((item, index) => (
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
