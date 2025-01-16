import { ReactNode } from "react";
import { TRoute } from "../types/route.types";
import { Route } from "react-router";

export const generateRoutes = (paths: TRoute[]): ReactNode => {
    return paths.map((item) => {
      if (item.children) {
        return (
          <Route key={item?.name} path={item?.path}>
            {item?.element && <Route index element={item?.element} />}
            {generateRoutes(item.children)}
          </Route>
        );
      }
  
      return (
        item?.path && (
          <Route key={item.name} path={item.path} element={item.element} />
        )
      );
    });
  };