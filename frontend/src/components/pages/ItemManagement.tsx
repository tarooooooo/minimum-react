import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure, Wrap, WrapItem, Text, Button, Flex, Link } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import { ItemCard } from "../organisms/layout/item/itemCard";
import { useItemsQuery } from "../../graphql/generated";
import { useNavigate } from "react-router-dom";

export const ItemManagement: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const onClickItem = useCallback(() => onOpen(), [isOpen]);
  const navigate = useNavigate();
  const onClickCreateItem = useCallback(() => navigate('/home/create_item'), []);

  const { data: {items = [] } = {} } = useItemsQuery();
  return (
    <>
      <Flex minWidth='max-content' justifyContent='right' gap='2'>
        <Link>
          <AiFillPlusCircle color="gray" size="3rem" onClick={onClickCreateItem} />
        </Link>
      </Flex>
      <Wrap p={{ base: 4, md: 10 }}>
        {items.map((item) => (
          <WrapItem key={item.id} mx="auto">
            <ItemCard imageUrl="https://source.unsplash.com/random" itemName={item.name} itemPrice={item.price} onClick={onClickItem}></ItemCard>
          </WrapItem>      
        ))}
      </Wrap>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>アイテム詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
             <Text>アイテム名</Text>
             <Text>100円</Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
