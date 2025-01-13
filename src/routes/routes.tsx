import { lazy } from 'react';
import { RouteObject } from 'react-router';

const MainLayout = lazy(() => import('../components/layout/MainLayout'));
const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const AdminDashboard = lazy(()=> import('../pages/admin/AdminDashboard') );
const CreateStudent = lazy(()=> import('../pages/admin/CreateStudent') )


export const routes : RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children:[
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'about',
            element: <About />,
          },
      ]
    },
    {
      path: '/admin',
      element: <MainLayout/>,
      children: [
        {
          index: true ,
          element: <AdminDashboard/>
        },
        {
          path: 'create-student',
          element: <CreateStudent/>
        }
      ]
    }
   
     
  ];