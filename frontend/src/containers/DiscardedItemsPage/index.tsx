import { DiscardedItemsPage } from "../../components/pages/DiscardedItemsPage"
import { useDiscardedItemsPageQuery } from "../../graphql/generated"

export const DiscardedItemsContainer: React.VFC = () => {
  const { data } = useDiscardedItemsPageQuery()
  
  const items = data?.discardedItems

  return <DiscardedItemsPage items={items!} />
}