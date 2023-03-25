import { Stack, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Img } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ItemBaseFragment, useRestoreItemMutation } from "../../../../graphql/generated";
import { useMessage } from "../../../../hooks/useMessage";
import { ConfirmButton } from "../../../atoms/button/ConfirmButton";

import ItemNoImage from '../../../../assets/item/no_image.png'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: ItemBaseFragment | null;
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
            {item?.image ? (
              <Image 
                rounded='lg'
                boxSize="170px"
                src={`data:image/png;base64,${item?.image}`}
                alt={item?.name}
                m="auto"
              />
            ) : 
              <Img
                rounded='lg'
                boxSize="170px"
                src={`https://minimum-react-image.s3.ap-northeast-1.amazonaws.com/uploads/item/image/${item?.id}/image.png`}
                alt={item?.name}
                m="auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = ItemNoImage}
              />
            }
            <Text>{item?.name}</Text>
            <Text>{item?.price}円</Text>    
            <ConfirmButton buttonColor="teal" onClick={onClickRestoreItem} disabled={item?.id === ""} alertText={"本当にクローゼットに戻しますか？"}>リストア</ConfirmButton>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
