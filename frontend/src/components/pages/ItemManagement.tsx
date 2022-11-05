import { useDisclosure, Wrap, WrapItem, Flex, Link, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import { ItemCard } from "../organisms/layout/item/itemCard";
import { useCategoryQuery, useItemsQuery } from "../../graphql/generated";
import { useNavigate } from "react-router-dom";
import { ItemDetail } from "../organisms/layout/item/ItemDetails";
import { useSelectItem } from "../../hooks/useSelectItem";

export const ItemManagement: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const onClickItem = (id: string) =>{
    onSelectItem({ id, items, onOpen })
  };
  const navigate = useNavigate();
  const onClickCreateItem = useCallback(() => navigate('/home/create_item'), []);
  const { onSelectItem, selectedItem } = useSelectItem();

  const { data: {items = [] } = {} } = useItemsQuery();
  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useCategoryQuery({
    variables: { id: "8" },
  })

  console.log(categoryData);

  return (
    <>
    <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>{categoryData!.category.id}!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>

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
