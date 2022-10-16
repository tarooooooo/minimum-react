import { memo, VFC } from "react";
import {Route, Routes} from "react-router-dom";

import { Login } from "../components/pages/Login";
import { NotFound } from "../components/pages/NotFound";
import { Home } from "../components/pages/Home";
import { homeRoutes } from "../router/HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route
        path='/home'
        element={<HeaderLayout/>}
      >
        <Route index element={<Home/>}/>
        {homeRoutes.map((route) => (
          <Route path={route.path} element={route.children}/>
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
});
