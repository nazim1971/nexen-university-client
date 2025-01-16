import { Route, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AdminRoutes from "./Admin/Admin.routes";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
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
