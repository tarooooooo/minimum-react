import { useParams } from "react-router-dom";
import { useCategoryQuery } from "../../graphql/generated";

import { useDisclosure, Wrap, WrapItem, Flex, Link, Tabs, TabList, Tab, TabPanels, TabPanel, Heading } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import { ItemCard } from "../organisms/layout/item/itemCard";
import { useCategoriesQuery, useItemsQuery } from "../../graphql/generated";
import { useNavigate } from "react-router-dom";
import { ItemDetail } from "../organisms/layout/item/ItemDetails";
import { useSelectItem } from "../../hooks/useSelectItem";

export const UrlParameter: VFC = memo(() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const onClickItem = (id: string) =>{
    onSelectItem({ id, items, onOpen })
  };
  const navigate = useNavigate();
  const onClickCreateItem = () => navigate('/home/create_item');
  const { onSelectItem, selectedItem } = useSelectItem();

  const { data: {items = [] } = {} } = useItemsQuery();
  const { data: {categories = [] } = {} } = useCategoriesQuery();
  const onClickCategory = useCallback((id: string) => {navigate(`/home/category/${id}`)}, []);

  const { id } = useParams();
  const { data: categoryData } = useCategoryQuery({ variables: { id: id! }})
  const selectedItems = categoryData?.category.items

  return (
    <>
      {categories.map((category, index) => {
        return (<Link key={index} onClick={() => onClickCategory(category.id)}>{category.name}</Link>)
      })}

      <Heading>{categoryData?.category.name}</Heading>

      <Flex minWidth='max-content' justifyContent='right' gap='2'>
        <Link>
          <AiFillPlusCircle color="gray" size="3rem" onClick={onClickCreateItem} />
        </Link>
      </Flex>
      <Wrap p={{ base: 4, md: 10 }}>
        {selectedItems?.nodes?.map((item) => (
          <WrapItem key={item!.id} mx="auto">
            <ItemCard imageUrl="https://source.unsplash.com/random" itemName={item!.name} itemPrice={item!.price} onClick={onClickItem} id={item!.id}></ItemCard>
          </WrapItem>      
        ))}
      </Wrap>
      <ItemDetail isOpen={isOpen} onClose={onClose} item={selectedItem!} />
    </>
  );
});
