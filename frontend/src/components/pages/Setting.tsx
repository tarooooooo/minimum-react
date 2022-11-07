import { Box, Button, Divider, Flex, FormControl, FormHelperText, FormLabel, Heading, HStack, Input, Select, Stack, Text, useRadioGroup } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { useCategoriesQuery } from "../../graphql/generated";
import { useMessage } from "../../hooks/useMessage";
import { RadioCard } from "../atoms/button/RadioCard";

export const Setting: VFC = memo(() => {

  // item management作成 mutationインポートから始める
  // カテゴリID取得のstate仮設定
  const [categoryId, setCategoryId] = useState("");
  const { data: {categories = [] } = {} } = useCategoriesQuery();
  const [ upperLimit, setUpperLimit ] = useState(0);

  const { showMessage } = useMessage();
  const navigate = useNavigate();
  const changeUpperLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    setUpperLimit(changeValue);
  };
  const category_name_arr: any[] = []
  {categories.map((category) => {
    category_name_arr.push(category.name)
    return (category_name_arr)
  })}
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: 1,
    // チェンジでラジオボタンの値を取得？
    onChange: console.log,
  })

  const onClickCreateUpperLimit= () => {
    setUpperLimit(0);
    showMessage({title: "アイテムリミットを設定しました", status: "success"});
    navigate('/home/setting');
  };

  const group = getRootProps()

  return (
    <>
    <Flex align="center" justify="center" mt={5}>
      <Box bg="white" w={[300, 400, 500]} p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="md" textAlign="center">アイテムストック</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={[5, 7, 10]}>
          <FormControl>
            <FormLabel>カテゴリ</FormLabel>


            <HStack {...group} mb={3}>
              {category_name_arr.map((value) => {
                const radio = getRadioProps({ value })
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                )
              })}
            </HStack>

            <FormLabel>ストック</FormLabel>
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
