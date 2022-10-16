import { memo, VFC } from "react";
import {DrawerOverlay, DrawerContent, DrawerBody, Drawer, Button } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickItemManagement: () => void;
  onClickSetting: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickItemManagement, onClickSetting }= props;
  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose} >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <p onClick={onClose}>
              <Button onClick={onClickHome} w="100%">TOP</Button>
            </p>
            <p onClick={onClose}>
              <Button onClick={onClickItemManagement} w="100%">アイテム一覧</Button>
            </p>
            <p onClick={onClose}>
              <Button onClick={onClickSetting} w="100%">設定</Button>
            </p>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
