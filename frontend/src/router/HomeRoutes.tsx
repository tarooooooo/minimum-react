import { Home } from "../components/pages/Home";
import { ItemManagement } from "../components/pages/ItemManagement";
import { CreateItem } from "../components/pages/CreateItem";
import { EditItem } from "../components/pages/EditItem";
import { Setting } from "../components/pages/Setting";
import { NotFound } from "../components/pages/NotFound";
import { Tutorial } from "../components/pages/Tutorial";
import { DiscardedItemsContainer } from "../containers/DiscardedItemsPage";

export const homeRoutes = [
  {
    path: "",
    children: <Home/>
  },
  {
    path: "item_management",
    children: <ItemManagement />
  },
  {
    path: "create_item",
    children: <CreateItem />
  },
  {
    path: "setting",
    children: <Setting />
  },
  {
    path: "tutorial",
    children: <Tutorial />
  },
  {
    path: "discarded_items",
    children: <DiscardedItemsContainer />
  },
  {
    path: "*",
    children: <NotFound />
  }
];
