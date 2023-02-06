import { useCallback, useState } from "react";
import { ItemBaseFragment } from "../graphql/generated";

type Props = {
  id: string;
  items: ItemBaseFragment[];
  onOpen: () => void;
}

// 選択アイテムを特定・モーダル表示する
export const useSelectItem = () => {
  const [selectedItem, setSelectedItem] = useState<ItemBaseFragment | null>(null);
  const onSelectItem = useCallback((props: Props) => {
    const { id, items, onOpen } = props;
    const targetItem = items.find((item) => item.id === id )
    setSelectedItem(targetItem!);
    onOpen();
  }, []);
  return { onSelectItem, selectedItem }
}