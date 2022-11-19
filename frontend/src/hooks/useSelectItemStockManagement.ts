import { useCallback, useState } from "react";
import { ItemStockManagement } from "../graphql/generated";

type Props = {
  id: string;
  itemStockManagements:  Array<ItemStockManagement>;
  onOpen: () => void;
}

// 選択アイテムストックを特定・モーダル表示する
export const useSelectItemStockManagement = () => {
  const [selectedItemStockManagement, setSelectedItemStockManagement] = useState<ItemStockManagement | null>(null);
  const onSelectItemStockManagement = useCallback((props: Props) => {
    const { id, itemStockManagements, onOpen } = props;
    const targetItemStockManagement = itemStockManagements.find((itemStockManagement: { id: string; }) => itemStockManagement.id === id )
    setSelectedItemStockManagement(targetItemStockManagement!);
    onOpen();
  }, []);
  return { onSelectItemStockManagement, selectedItemStockManagement }
}