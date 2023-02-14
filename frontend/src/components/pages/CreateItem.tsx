import { Box, Divider, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Select, Stack, Text } from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { useCategoriesQuery, useCategoryQuery, useCreateItemMutation } from "../../graphql/generated";
import { useMessage } from "../../hooks/useMessage";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const CreateItem: VFC = memo(() => {
  const [createItem] = useCreateItemMutation({ refetchQueries: ["items", "categories"] });

  const [name, setName] = useState("");
  const [price, setPrice] = useState(1000);
  const { data: {categories = [] } = {} } = useCategoriesQuery();
  const [categoryId, setCategoryId] = useState(`${categories[0].id}`);
  const { data: categoryData } = useCategoryQuery({ variables: { id: categoryId }})
  const changelineLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    setPrice(changeValue);
  };
  const { showMessage } = useMessage();

  const navigate = useNavigate();
  const onClickCreateItem= () => {
    const categoryItemCount = categoryData?.category.itemCount
    const upperLimit = categoryData?.category.itemStockManagement?.upperLimit
    

    if(categoryItemCount! < upperLimit!) {
      createItem({ variables: { params: { name: name, price: price, categoryId: categoryId } } });
      if (!file) {
        return
      }
      const formData = new FormData()
      formData.append("file", file)
      
      
      setName("");
      setPrice(1000);
      showMessage({title: "アイテムを追加しました", status: "success"});
      navigate('/home/item_management');
    } else {
      showMessage({title: "ストック可能数以上は追加できません", status: "error"});
    }
  };

  const categorSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(e.target.value)
  }

  const [file, setFile] = useState<File | null>(null)

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      setFile(files[0])
    }
  }

  const onChangeImage = () => {
    const reader = new FileReader()
    reader.readAsDataURL(file!)
    reader.onload = function() {
      var image: any
      image = reader.result;
      console.log(image)
    }
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
            <Select onChange={(e) => categorSelectChange(e)} mb={2}>
              {categories.map((category) => {
                return (<option value={category.id}>{category.name}</option>)
              })}
            </Select>
            <input
              name="file"
              type="file"
              accept="image/*"
              onChange={onChangeFile}
            />
            <img id="image" />


            <Text textAlign="center">
              <PrimaryButton onClick={onChangeImage}>テスト!</PrimaryButton>
            </Text>

   
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
