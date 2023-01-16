import { DiscardedItemsPage } from "../../components/pages/DiscardedItemsPage"
import { useDiscardedItemsPageQuery } from "../../graphql/generated"

export const DiscardedItemsContainer: React.VFC = () => {
  const { data } = useDiscardedItemsPageQuery()

  // task: edgesからitemを取り出す処理を、hooksに切り出す
  // const items = data?.discardedItems?.edges?.map((item) => {
  //   return (item?.node)
  // })
  
  const testItems = data?.discardedItems

  return <DiscardedItemsPage items={testItems!} />
}