import { WrapItem, Wrap, Heading, Flex, Link, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { Item, ItemBaseFragment } from "../../../graphql/generated";
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
  items: ItemBaseFragment[],
}

export const DiscardedItemsPage: React.VFC<DiscardedItemsPageProps> = memo(({
 items
}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const navigate = useNavigate();
  const onClickItemsPage = () => navigate('/home/item_management');
  // const { onSelectItem, selectedItem } = useSelectItem();
  const onClickItem = (id: string) =>{
    console.log();
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
        {items?.map((item: ItemBaseFragment) => (
          <p>{item.name}</p>
        ))}
      </Wrap>
      {/* <DiscardedItemDetails isOpen={isOpen} onClose={onClose} item={selectedItem!} /> */}
    </>
  )
});
