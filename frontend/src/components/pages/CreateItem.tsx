import { Box, Divider, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Select, Stack, Text } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { useCategoriesQuery, useCreateItemMutation } from "../../graphql/generated";
import { useMessage } from "../../hooks/useMessage";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const CreateItem: VFC = memo(() => {
  const [createItem] = useCreateItemMutation({ refetchQueries: ["items"] });
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1000);
  const [categoryId, setCategoryId] = useState("");
  const changelineLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    setPrice(changeValue);
  };
  const { showMessage } = useMessage();
  const navigate = useNavigate();
  const onClickCreateItem= () => {
    createItem({ variables: { params: { name: name, price: price, categoryId: categoryId } } });
    setName("");
    setPrice(1000);
    showMessage({title: "アイテムを追加しました", status: "success"});
    navigate('/home/item_management');
  };
  const { data: {categories = [] } = {} } = useCategoriesQuery();

  const categorSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(e.target.value)
  }

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
            <FormLabel>カテゴリ</FormLabel>
            <Select placeholder='カテゴリを選択' onChange={(e) => categorSelectChange(e)} mb={2}>
              {categories.map((category) => {
                return (<option value={category.id}>{category.name}</option>)
              })}
            </Select>
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
