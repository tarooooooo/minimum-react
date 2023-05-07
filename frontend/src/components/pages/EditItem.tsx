import { Box, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Button } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useUpdateItemMutation, useItemQuery } from "../../graphql/generated";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import * as z from 'zod';
import { zodRequiredString, zodRequiredNumber } from "../common/form/validations/schema";
import { useNavigate, useParams } from "react-router-dom";

const formSchema = z.object({
  name: zodRequiredString('アイテム名', 100),
  price: zodRequiredNumber('値段', 1, 1000000),
});

export type FormSchemaType = z.infer<typeof formSchema>;

export const EditItem: VFC = memo(() => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });
  
  const { id } = useParams();
  const { data: itemData } = useItemQuery({ variables: { id: id! }})
  
  useEffect(() => {
    if (itemData && itemData.item) {
      reset({ name: itemData.item.name, price: itemData.item.price ?? 1000 });
    }
  }, [])

  const navigate = useNavigate();
  
  const [updateItem] = useUpdateItemMutation();
  
  const onSubmit = (data: FormSchemaType) => {
    updateItem(
      { 
        variables:{ 
          id: id!,
          params: { 
            ...data,
            categoryId: itemData?.item.categoryId
          }
        }
      }
    )
    navigate('/home/item_management');
  }

  return (
    <>
      <Flex align="center" justify="center" mt={5}>
        <Box bg="white" w={[300, 400, 500]} p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="md" textAlign="center">アイテム編集</Heading>
          <Divider my={4} />
          <Stack spacing={6} py={4} px={[5, 7, 10]}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel htmlFor="name">アイテム名</FormLabel>
                <Input id="name" placeholder="アイテム名" {...register('name')} />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.price}>
                <FormLabel htmlFor="price">金額</FormLabel>
                <Input id="price" type="number" placeholder="金額" {...register('price', {
                  setValueAs: (value) => (value === '' ? 0 : parseInt(value)),
                })} />
                <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="blue" mt={4}>更新</Button>
            </form>
          </Stack>
        </Box>
      </Flex>
    </>
  )
});
