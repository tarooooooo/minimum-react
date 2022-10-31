import { Stack, Image, Text, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { Item, useDeleteItemMutation } from "../../../../graphql/generated";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: Item | null;
};

export const ItemDetail: VFC<Props> = memo((props: Props) => {
  const { isOpen, onClose, item } = props;
  const [deleteItem] = useDeleteItemMutation({ refetchQueries: ["items"] });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>アイテム詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <Text>{item?.name}</Text>
            <Text>{item?.price}円</Text>    
            <Button colorScheme='red' onClick={() => deleteItem({ variables: { id: item!.id }})}>削除</Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
