// Const.admin.ts
import { ReactNode } from "react";
import MainLayout from "../../components/layout/MainLayout";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import CreateAdmin from "../../pages/admin/CreateAdmin";
import CreateFaculty from "../../pages/admin/CreateFaculty";
import CreateStudent from "../../pages/admin/CreateStudent";

export interface IAdminRoute {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: IAdminRoute[];
}

export const adminPaths: IAdminRoute[] = [

  {
    name: "Dashboard",
    path: "dashboard",
    element: <MainLayout />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];
