import { lazy } from 'react';
import { RouteObject } from 'react-router';

const MainLayout = lazy(() => import('../components/layout/MainLayout'));
const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));


export const routes : RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children:[
        {
            path: '',
            element: <Home/>
        },
        {
            path: 'about',
            element: <About />,
          },
      ]
    },
   
     
  ];