import { memo, ReactNode, VFC } from "react";
import { 
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
 } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const ConfirmButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef<HTMLButtonElement>(null)

  const onClickConfirm = (() => {
    onClose();
    onClick();
  });
  
  return (
    <>
      <Button
        colorScheme='red'
        color="white"
        _hover={{ opacity: 0.8 }}
        onClick={onOpen}
        disabled={disabled || loading}
        isLoading={loading}
      >
        {children}
      </Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef!}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>確認</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            本当にアイテムを削除しますか？
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme='red' mr={3} onClick={onClickConfirm}>
              Yes
            </Button>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
});
