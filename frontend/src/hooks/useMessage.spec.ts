import { useToast } from "@chakra-ui/react";
import { renderHook } from "@testing-library/react";
import { useMessage } from "./useMessage";


describe('useMessage', () => {
  
  it('アラートメッセージを返却する', () => {
    const { showMessage } = useMessage();
    
    const toast = useToast();
    const { result } = renderHook(() => showMessage({title: "テストタイトル", status: "error"}))
    expect(result).toBe(
      toast({
        position: "top",
        duration: 2000,
        isClosable: true,
        title: "テストタイトル",
        status: "error",
      })
    )
  })
})
