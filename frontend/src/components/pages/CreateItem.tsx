import { Box, Divider, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import { useCreateItemMutation } from "../../graphql/generated";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const CreateItem: VFC = memo(() => {
  const [createItem] = useCreateItemMutation({ refetchQueries: ["items"] });
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1000);
  const changelineLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    setPrice(changeValue);
  };
  const onClickCreateItem= () => {
    createItem({ variables: { params: { name: name, price: price } } });
    setName("");
    setPrice(1000);
  };

  return (
    <>
    <Flex align="center" justify="center" mt={5}>
      <Box bg="white" w={[300, 400, 500]} p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="md" textAlign="center">アイテム追加</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={[5, 7, 10]}>
          <FormControl>
            <FormLabel>アイテム名</FormLabel>
            <Input placeholder='アイテム名' mb={2} value={name} onChange={(e) => setName(e.target.value)}/>
            <FormLabel>値段</FormLabel>
            <Input type="number" placeholder='値段' mb={2} value={price} onChange={changelineLength}/>
            <Text textAlign="center">
              <PrimaryButton onClick={onClickCreateItem}>Create!</PrimaryButton>
            </Text>
          </FormControl>        
        </Stack>
      </Box>
    </Flex>
    </>
  )
});
