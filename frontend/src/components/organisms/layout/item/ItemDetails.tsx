import { Stack, Image, Text, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react";
import { memo, ReactNode, useCallback, VFC } from "react";
import { Item, useDeleteItemMutation, useDiscardItemMutation } from "../../../../graphql/generated";
import { useMessage } from "../../../../hooks/useMessage";
import { ConfirmButton } from "../../../atoms/button/ConfirmButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: Item | null;
};

export const ItemDetail: VFC<Props> = memo((props: Props) => {
  const { isOpen, onClose, item } = props;
  const [discardItem] = useDiscardItemMutation({ refetchQueries: ["categories", "items", "discardedItemsPage"] });
  const { showMessage } = useMessage();

  const onClickDiscardItem = () => {
    discardItem({ variables: { params: { itemId: item!.id }}})
    onClose();
    showMessage({ title: `${item!.name}を廃棄しました`, status: "error"})
  }

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
            <ConfirmButton buttonColor="red" onClick={onClickDiscardItem} disabled={item?.id === ""} alertText={"本当に廃棄しますか？"}>廃棄</ConfirmButton>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
