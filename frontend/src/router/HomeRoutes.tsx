import { Home } from "../components/pages/Home";
import { ItemManagement } from "../components/pages/ItemManagement";
import { CreateItem } from "../components/pages/CreateItem";
import { Setting } from "../components/pages/Setting";
import { NotFound } from "../components/pages/NotFound";
import { Tutorial } from "../components/pages/Tutorial";
import { DiscardedItemsPage } from "../components/pages/DiscardedItemsPage";

export const homeRoutes = [
  {
    path: "",
    children: <Home />
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
    children: <DiscardedItemsPage />
  },
  {
    path: "*",
    children: <NotFound />
  }
];
