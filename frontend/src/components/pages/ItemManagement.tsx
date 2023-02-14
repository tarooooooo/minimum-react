import { Text, useDisclosure, Wrap, WrapItem, Flex, Link, Tabs, TabList, Tab, TabPanels, TabPanel, Divider, Button } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import { ItemCard } from "../organisms/layout/item/itemCard";
import { useCategoriesQuery, useItemsQuery } from "../../graphql/generated";
import { useNavigate } from "react-router-dom";
import { ItemDetail } from "../organisms/layout/item/ItemDetails";
import { useSelectItem } from "../../hooks/useSelectItem";

export const ItemManagement: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const onClickItem = (id: string) =>{
    onSelectItem({ id, items, onOpen })
  };
  const navigate = useNavigate();
  const onClickCreateItem = () => navigate('/home/create_item');
  const onClickDiscardedItem = () => navigate('/home/discarded_items');
  const { onSelectItem, selectedItem } = useSelectItem();

  const { data: {items = [] } = {} } = useItemsQuery();
  const { data: {categories = [] } = {} } = useCategoriesQuery();
  const onClickCategory = useCallback((id: string) => {navigate(`/home/category/${id}`)}, []);

  return (
    <>
      <Flex justifyContent="center" mt={3}>
        {categories.map((category, index) => {
          return (
            <Button colorScheme='teal' variant='outline' textAlign="center" mx={1} my={5} backgroundColor='white'>
              <Link key={index} onClick={() => onClickCategory(category.id)} style={{ textDecoration: 'none' }}>
                {category.name}
              </Link>
            </Button> 
          )
        })}
      </Flex>
      <Flex justifyContent="right">
        <Link onClick={onClickDiscardedItem}>
          廃棄アイテム一覧→  
        </Link>
      </Flex>
      <Divider my={4} />
      <Flex minWidth='max-content' justifyContent='right' gap='2'>
        <Link>
          <AiFillPlusCircle color="gray" size="3rem" onClick={onClickCreateItem} />
        </Link>
      </Flex>
      <Wrap p={{ base: 4, md: 10 }}>
        {items.map((item) => (
          <WrapItem key={item.id} mx="auto">
            <ItemCard imageUrl="https://source.unsplash.com/random" itemName={item.name} itemPrice={item.price} onClick={onClickItem} id={item.id} image={item.image!}></ItemCard>
          </WrapItem>      
        ))}
      </Wrap>
      <ItemDetail isOpen={isOpen} onClose={onClose} item={selectedItem!} />
    </>
  );
});
