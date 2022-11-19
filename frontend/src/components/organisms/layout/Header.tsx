import { memo, VFC, useCallback } from "react";
import { Flex, Heading, Link, Box, Button, DrawerOverlay, DrawerContent, DrawerBody, Drawer, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate('/home'), []);
  const onClickItemManagement = useCallback(() => navigate('/home/category/1'), []);
  const onClickSetting = useCallback(() => navigate('/home/setting'), []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{base: "md", md: "lg"}}>
            minimum
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex"}}>
          <Box pr={4}>
            <Link onClick={onClickItemManagement}>アイテム一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen}/>
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickItemManagement={onClickItemManagement}
        onClickSetting={onClickSetting}
      />
    </>
  )
});
