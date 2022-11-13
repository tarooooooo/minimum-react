import { useItemStockManagementsQuery, useCreateItemStockManagementMutation } from "../../graphql/generated";
import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, Radio, RadioGroup, Stack, Text, useRadioGroup } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { useCategoriesQuery } from "../../graphql/generated";
import { useMessage } from "../../hooks/useMessage";
import React from "react";

export const Setting: VFC = memo(() => {
  const { data: { itemStockManagements = [] } = {} } = useItemStockManagementsQuery();
  const [createItemStockManagement] = useCreateItemStockManagementMutation({ refetchQueries: ["itemStockManagements"]});
  const { data: {categories = [] } = {} } = useCategoriesQuery();
  const [ upperLimit, setUpperLimit ] = useState(0);
  const [ categoryValue, setCategoryValue ] =  useState("");
  const { showMessage } = useMessage();
  const navigate = useNavigate();
  const changeUpperLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    setUpperLimit(changeValue);
  };
  const radioButtonColors = ['teal.50', 'teal.100', 'teal.200']

  const onClickCreateUpperLimit= () => {
    createItemStockManagement({variables: { params: { upperLimit: upperLimit, categoryId: categoryValue } } } );
    setUpperLimit(0);
    setCategoryValue("");
    showMessage({title: "アイテムリミットを設定しました", status: "success"});
    navigate('/home/setting');
  };

  console.log(itemStockManagements);

  {itemStockManagements.map((itemStockManagement) => {
    console.log(itemStockManagement.category.name);
  })}

  return (
    <>
    <Heading size='md' align="center" mt={5} mb={4} >ストック可能数</Heading>
    <Divider my={4} />
    <Flex align="center" justify="center" pb={5}>
      {itemStockManagements.map((itemStockManagement, index) => {
        return (
          <Box bg={`${radioButtonColors[index]}`} w={[200, 200, 170]} p={4} borderRadius="md" shadow="md" key={index}>
            <Text fontSize='md' align="center" fontWeight="bold">{itemStockManagement.category.name}</Text>
            <Divider my={4} />
            <Text flexWrap="nowrap" fontSize='3xl' align="center" fontWeight="bold">{itemStockManagement?.upperLimit}</Text>
          </Box>
        )
      })}
    </Flex>
    <Flex align="center" justify="center" mt={5}>
      <Box bg="white" w={[300, 400, 500]} p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="md" textAlign="center">アイテムストック</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={[5, 7, 10]}>
          <FormControl>
            <FormLabel>カテゴリ</FormLabel>
              <RadioGroup>
                <Stack spacing={5} direction='row'>
                  {categories.map((category, index) => {
                    return (
                      <>
                        <Radio colorScheme={`${radioButtonColors[index]}`} value={`${category.id}`} checked={categoryValue === `${category.id}`} onChange={() => setCategoryValue(`${category.id}`)}>
                          {category.name}
                        </Radio>
                      </>
                    )
                  })}
                </Stack>
              </RadioGroup>
            <FormLabel mt={3}>ストック</FormLabel>
            <Input type="number" placeholder='ストック可能数' mb={2} value={upperLimit} onChange={changeUpperLimit} />
            <Text textAlign="center">
              <Button onClick={onClickCreateUpperLimit}>ボタン</Button>
            </Text>
          </FormControl>        
        </Stack>
      </Box>
    </Flex>
    </>
  )
});
