import { useDisclosure, Wrap, WrapItem, Flex, Link } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import { ItemCard } from "../organisms/layout/item/itemCard";
import { useItemsQuery } from "../../graphql/generated";
import { useNavigate } from "react-router-dom";
import { ItemDetail } from "../organisms/layout/item/ItemDetails";
import { useSelectItem } from "../../hooks/useSelectItem";

export const ItemManagement: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const onClickItem = useCallback((id: string) =>{
    onSelectItem({ id, items, onOpen })
  },
  []);
  const navigate = useNavigate();
  const onClickCreateItem = useCallback(() => navigate('/home/create_item'), []);
  const { onSelectItem, selectedItem } = useSelectItem();

  const { data: {items = [] } = {} } = useItemsQuery();
  return (
    <>
      <Flex minWidth='max-content' justifyContent='right' gap='2'>
        <Link>
          <AiFillPlusCircle color="gray" size="3rem" onClick={onClickCreateItem} />
        </Link>
      </Flex>
      <Wrap p={{ base: 4, md: 10 }}>
        {items.map((item) => (
          <WrapItem key={item.id} mx="auto">
            <ItemCard imageUrl="https://source.unsplash.com/random" itemName={item.name} itemPrice={item.price} onClick={onClickItem} id={item.id}></ItemCard>
          </WrapItem>      
        ))}
      </Wrap>
      <ItemDetail isOpen={isOpen} onClose={onClose} item={selectedItem!} />
    </>
  );
});
