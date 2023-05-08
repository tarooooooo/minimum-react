import { EditItem } from "../components/pages/EditItem";
import { ItemManagement } from "../components/pages/ItemManagement";
import { NotFound } from "../components/pages/NotFound";

export const itemRoutes = [
  {
    path: "edit/:id",
    children: <EditItem/>
  },
  {
    path: "*",
    children: <NotFound />
  },
];
