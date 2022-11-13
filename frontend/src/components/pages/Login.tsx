import { memo, useState, VFC, ChangeEvent } from "react";
import {
  Flex,
  Box,
  Heading,
  Divider,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const {login, loading} = useAuth();
  const [userId, setUserId] = useState('');
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">minimum</Heading>
        <Divider my={4} />
        <Text fontSize='xs' color='gray'>※開発中ですのでデータの保存はできません</Text>
        <Text fontSize='xs' color='gray'>ユーザーネームに、「1」を入力するとログインできます</Text>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーネーム" value={userId} onChange={onChangeUserId}/>
          <PrimaryButton onClick={onClickLogin} disabled={userId === ""} loading={loading}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
