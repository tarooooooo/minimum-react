import { Box, Divider, Flex, FormControl, Heading, Stack } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useUpdateItemMutation } from "../../graphql/generated";
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  price: string;
};

export const EditItem: VFC = memo(() => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  useEffect(() => {
    reset({ name: 'アイテム名', price: "999" })
  }, [])
  
  return (
    <>
      <Flex align="center" justify="center" mt={5}>
        <Box bg="white" w={[300, 400, 500]} p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="md" textAlign="center">アイテム編集</Heading>
          <Divider my={4} />
          <Stack spacing={6} py={4} px={[5, 7, 10]}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>アイテム名</label>
              <input {...register('name', { required: '入力が必須の項目です' })} />
              {errors.name?.message && <div>{errors.name.message}</div>}
              <label>金額</label>
              <input {...register('price', { required: '入力が必須の項目です' })} />
              {errors.price?.message && <div>{errors.price.message}</div>}
              <button type="submit">更新</button>
            </form>
          </Stack>
        </Box>
      </Flex>
    </>
  )
});
