import { Stack, Image, Text, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, FormControl, Divider, Input } from "@chakra-ui/react";
import { memo, ReactNode, useCallback, VFC } from "react";
import { Item, ItemStockManagement, useDeleteItemMutation } from "../../../../graphql/generated";
import { useMessage } from "../../../../hooks/useMessage";
import { ConfirmButton } from "../../../atoms/button/ConfirmButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  upperLimit: number;
  itemStockManagement: ItemStockManagement | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

export const ItemManagementDetail: VFC<Props> = memo((props: Props) => {
  const { isOpen, onClose, itemStockManagement, upperLimit, onChange, onClick } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent height={350} alignItems="center" >
        <ModalHeader textAlign="center">{itemStockManagement?.category.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={6} px={[5, 7, 10]}>
            <FormControl>
            <Text fontSize="sm" color="gray.400">現在のストック可能数</Text>
             <Text fontSize='6xl' textAlign="center">{itemStockManagement?.upperLimit}</Text>
             <Divider mb={5} />
              <Text fontSize="xs" color="gray.400">設定数以上はアイテム登録不可になります</Text>
              <Input type="number" placeholder='ストック可能数' mb={2} value={upperLimit} onChange={onChange} />
              <Text textAlign="center">
                <Button onClick={onClick} backgroundColor="teal.300">更新</Button>
              </Text>
            </FormControl>        
          </Stack>

        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
