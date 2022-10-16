import { Home } from "../components/pages/Home";
import { ItemManagement } from "../components/pages/ItemManagement";
import { Setting } from "../components/pages/Setting";
import { NotFound } from "../components/pages/NotFound";

export const homeRoutes = [
  {
    path: "item_management",
    children: <ItemManagement />
  },
  {
    path: "setting",
    children: <Setting />
  },
  {
    path: "*",
    children: <NotFound />
  }
];
