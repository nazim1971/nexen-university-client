import { Route, Routes } from "react-router";
import About from "../pages/shared/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import App from "../App";
import { generateRoutes } from "../utils/routeGenerator";
import { adminPaths } from "./Admin/Const.admin";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About/>} />
      </Route>

      <Route path="/admin" element={<App />}>
        {generateRoutes(adminPaths)}
      </Route>

      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
  );
};

export default AppRoutes;
