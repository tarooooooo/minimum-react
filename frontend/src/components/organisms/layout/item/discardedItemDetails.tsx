import { Stack, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Item, useRestoreItemMutation } from "../../../../graphql/generated";
import { useMessage } from "../../../../hooks/useMessage";
import { ConfirmButton } from "../../../atoms/button/ConfirmButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: Item | null;
};

export const DiscardedItemDetails: VFC<Props> = memo((props: Props) => {
  const { isOpen, onClose, item } = props;
  const [restoreItem] = useRestoreItemMutation({ refetchQueries: ["categories", "items", "discardedItemsPage"] });
  const { showMessage } = useMessage();

  const onClickRestoreItem = () => {
    restoreItem({ variables: { params: { itemId: item!.id }}})
    onClose();
    showMessage({ title: `${item!.name}をクローゼットに戻しました`, status: "success"})
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>廃棄アイテム詳細</ModalHeader>
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
            <ConfirmButton buttonColor="teal" onClick={onClickRestoreItem} disabled={item?.id === ""} alertText={"本当にクローゼットに戻しますか？"}>リストア</ConfirmButton>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
