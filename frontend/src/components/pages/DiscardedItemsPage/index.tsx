import { WrapItem, Wrap, Heading, Flex, Link } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../../../graphql/generated";
import { ItemCard } from "../../organisms/layout/item/itemCard";

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
  const navigate = useNavigate();
  const onClickItemsPage = () => navigate('/home/item_management');

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
            <ItemCard imageUrl="https://source.unsplash.com/random" itemName={item.name} itemPrice={item.price} onClick={() => {}} id={item.id}></ItemCard>
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
});
