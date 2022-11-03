import { Stack, Image, Text, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react";
import { memo, ReactNode, useCallback, VFC } from "react";
import { Item, useDeleteItemMutation } from "../../../../graphql/generated";
import { useMessage } from "../../../../hooks/useMessage";
import { ConfirmButton } from "../../../atoms/button/ConfirmButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: Item | null;
};

export const ItemDetail: VFC<Props> = memo((props: Props) => {
  const { isOpen, onClose, item } = props;
  const [deleteItem] = useDeleteItemMutation({ refetchQueries: ["items"] });
  const { showMessage } = useMessage();

  const onClickDeleteItem = () => {
    deleteItem({ variables: { id: item!.id }});
    onClose();
    showMessage({title: "アイテムを削除しました", status: "error"});
  };

  console.log(isOpen);
  console.log(item);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>アイテム詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <Image 
              rounded='lg'
              boxSize="300px" 
              src="https://source.unsplash.com/random"
              alt={item?.name}
              m="auto"
            />
            <Text>{item?.name}</Text>
            <Text>{item?.price}円</Text>    
            <ConfirmButton onClick={onClickDeleteItem} disabled={item?.id === ""}>削除</ConfirmButton>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
