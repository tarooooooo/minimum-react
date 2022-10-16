import {
  useItemsQuery,
  useCreateItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from "./graphql/generated";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider, Button} from "@chakra-ui/react"
import {useState} from "react";

import theme from "./theme/theme"
import { Router } from "./router/Router"

function App() {
  const { data: { items = [] } = {} } = useItemsQuery();
  const [createItem] = useCreateItemMutation({ refetchQueries: ["items"] });
  const [name, setName] = useState("");
  const [deleteItem] = useDeleteItemMutation({ refetchQueries: ["items"] });
  const [updateItem] = useUpdateItemMutation();

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
        {/*以下、一旦コメントアウト*/}
        {/*<div>*/}
        {/*  <input value={name} onChange={(e) => setName(e.target.value)} />*/}
        {/*  <button*/}
        {/*    onClick={() => {*/}
        {/*      createItem({ variables: { params: { name: name } } });*/}
        {/*      setName("");*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    保存*/}
        {/*  </button>*/}
        {/*  {items.map((item) => (*/}
        {/*    <div key={item.id}>*/}
        {/*      <input*/}
        {/*        value={item.name || ""}*/}
        {/*        onChange={(e) =>*/}
        {/*          updateItem({*/}
        {/*            variables: { id: item.id, params: { name: e.target.value } },*/}
        {/*          })*/}
        {/*        }*/}
        {/*      />*/}
        {/*      <button onClick={() => deleteItem({ variables: { id: item.id } })}>*/}
        {/*      削除*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
