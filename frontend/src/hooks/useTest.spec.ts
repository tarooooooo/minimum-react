import { renderHook } from "@testing-library/react";
import { useTest } from "./useTest";


describe('useTest', () => {
  
  it('テスト', () => {
    const { result } = renderHook(() => useTest())
    expect(result.current.test).toBe(
      "test"
    )
  })
})
