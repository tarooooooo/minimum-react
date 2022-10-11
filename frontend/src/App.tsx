import { ItemsQuery } from "./graphql/generated";

function App() {
  const { data: { items = [] } = {} } = useItemsQuery();

  return (
    <div>
      {items.map((item: Item) => (
        <div key={item.id}>{item.name} : {item.price}</div>
      ))}
    </div>
  );
}

export default App;
