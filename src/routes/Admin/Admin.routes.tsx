import { Route, Routes } from "react-router";
import { adminPaths, IAdminRoute } from "./Const.admin";

const AdminRoutes = () => {
  // Flatten the routes, including child routes
  const adminRoutes = adminPaths.reduce<IAdminRoute[]>((acc, item) => {
    // Add the top-level route if it has a path and element
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    // Add child routes if available
    if (item.children) {
      item.children.forEach((child) => {
        if (child.path && child.element) {
          acc.push({
            path: child.path,
            element: child.element,
          });
        }
      });
    }

    return acc;
  }, []);

  return (
    <Routes>
      {adminRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element || <div>Component not found</div>}>
        
           </Route>
      ))}
    </Routes>
  );
};

export default AdminRoutes;