import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ItemCard } from "../organisms/layout/item/itemCard";

export const ItemManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <ItemCard imageUrl="https://source.unsplash.com/random" itemName="アイテム" itemPrice="1000"></ItemCard>
      </WrapItem>      
    </Wrap>
  );
});
