import { Route } from "react-router";
import { adminPaths } from "./Const.admin";



const AdminRoutes = () => {
  return (
    <>
      {adminPaths.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element || <></>}
        >
          {route.children?.map((childRoute, childIndex) => (
            <Route
              key={childIndex}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}
        </Route>
      ))}
    </>
  );
};

export default AdminRoutes;
