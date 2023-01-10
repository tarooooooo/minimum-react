import { WrapItem, Wrap, Heading, Flex, Link, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../../../graphql/generated";
import { useSelectItem } from "../../../hooks/useSelectItem";
import { ItemCard } from "../../organisms/layout/item/itemCard";
import { DiscardedItemDetails} from "../../organisms/layout/item/discardedItemDetails";

// type ItemProps = {
//   id: string,
//   name: string,
//   price: number | undefined | null,
// }

// task: itemsに適切な型をつける
export type DiscardedItemsPageProps = {
  items: any,
}

export const DiscardedItemsPage: React.VFC<DiscardedItemsPageProps> = memo(({
 items
}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const navigate = useNavigate();
  const onClickItemsPage = () => navigate('/home/item_management');
  const { onSelectItem, selectedItem } = useSelectItem();
  const onClickItem = (id: string) =>{
    onSelectItem({ id, items, onOpen })
  };

  return (
    <>
      <Flex justifyContent="right">
        <Link onClick={onClickItemsPage}>
          アイテム一覧→
        </Link>
      </Flex>
      <Heading color="gray" align="center" size='md' mt={5}>廃棄アイテム一覧</Heading>
      <Wrap p={{ base: 4, md: 10 }}>
        {items?.map((item: Item, index: number) => (
          <WrapItem key={item.id} mx="auto">
            <ItemCard imageUrl="https://source.unsplash.com/random" itemName={item.name} itemPrice={item.price} onClick={onClickItem} id={item.id}></ItemCard>
          </WrapItem>
        ))}
      </Wrap>
      <DiscardedItemDetails isOpen={isOpen} onClose={onClose} item={selectedItem!} />
    </>
  )
});
