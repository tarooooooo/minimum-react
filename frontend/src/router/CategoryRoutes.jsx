import { Home } from "../components/pages/Home";
import { ItemManagement } from "../components/pages/ItemManagement";
import { CategoryItems } from "../components/pages/CategoryItems";
import { NotFound } from "../components/pages/NotFound";

export const categoryRoutes = [
  {
    path: "",
    children: <ItemManagement />
  },
  {
    path: ":id",
    children: <CategoryItems/>
  },
  {
    path: "*",
    children: <NotFound />
  },
];
