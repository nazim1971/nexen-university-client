// import { lazy } from 'react';
// import { RouteObject } from 'react-router';

import { Route, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import About from "../pages/About";
import CreateFaculty from "../pages/admin/CreateFaculty";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

// const MainLayout = lazy(() => import('../components/layout/MainLayout'));
// const About = lazy(() => import('../pages/About'));
// const Home = lazy(() => import('../pages/Home'));
// const AdminDashboard = lazy(()=> import('../pages/admin/AdminDashboard'));
// const CreateStudent = lazy(()=> import('../pages/admin/CreateStudent'));

// export const Routes : RouteObject[] = [
//     {
//       path: '/',
//       element: <MainLayout />,
//       children:[
//         {
//             index: true,
//             element: <Home/>
//         },
//         {
//             path: 'about',
//             element: <About />,
//           },
//       ]
//     },
//     {
//       path: '/admin',
//       element: <MainLayout/>,
//       children: [
//         {
//           index: true ,
//           element: <AdminDashboard/>
//         },
//         {
//           path: 'dashboard' ,
//           element: <AdminDashboard/>
//         }
//         ,
//         {
//           path: 'create-student',
//           element: <CreateStudent/>
//         }
//       ]
//     }

//   ];

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
      </Route>

      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="create-student" element={<CreateStudent />} />
        <Route path="create-faculty" element={<CreateFaculty />} />
      </Route>

      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
  );
};

export default AppRoutes;
