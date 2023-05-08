import { Stack, Image, Text, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, Img, Link, Flex } from "@chakra-ui/react";
import { SettingsIcon } from '@chakra-ui/icons'
import { memo, ReactNode, useCallback, VFC } from "react";
import { Item, ItemBaseFragment, useDeleteItemMutation, useDiscardItemMutation } from "../../../../graphql/generated";
import { useMessage } from "../../../../hooks/useMessage";
import { ConfirmButton } from "../../../atoms/button/ConfirmButton";
import { useNavigate } from "react-router-dom";

import ItemNoImage from '../../../../assets/item/no_image.png'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: ItemBaseFragment | null;
};

export const ItemDetail: VFC<Props> = memo((props: Props) => {
  const navigate = useNavigate();
  const { isOpen, onClose, item } = props;
  const [discardItem] = useDiscardItemMutation({ refetchQueries: ["categories", "items", "discardedItemsPage"] });
  const { showMessage } = useMessage();

  const onClickDiscardItem = () => {
    discardItem({ variables: { params: { itemId: item!.id }}})
    onClose();
    showMessage({ title: `${item!.name}を廃棄しました`, status: "error"})
  }

  const onClickEditItem = useCallback((id: string) => navigate(`/home/item/edit/${id}`), []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>アイテム詳細</ModalHeader>
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
            <Flex>
              <ConfirmButton buttonColor="red" onClick={onClickDiscardItem} disabled={item?.id === ""} alertText={"本当に廃棄しますか？"}>廃棄</ConfirmButton>
              <Button onClick={() => onClickEditItem(item!.id)} ><SettingsIcon boxSize={8}/></Button>
            </Flex>  
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
