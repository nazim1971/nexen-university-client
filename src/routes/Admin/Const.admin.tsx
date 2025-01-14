import { ReactNode } from "react";
import MainLayout from "../../components/layout/MainLayout";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import CreateAdmin from "../../pages/admin/CreateAdmin";
import CreateFaculty from "../../pages/admin/CreateFaculty";
import CreateStudent from "../../pages/admin/CreateStudent";

// Define types for the admin paths
export interface AdminRoute {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: AdminRoute[]; // Children can be nested routes
  }

export const adminPaths: AdminRoute[] = [
  {
    name: "Dashboard",
    path: "/admin",
    element: <MainLayout />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Dashboard",
        path: "/dashboard",
        element: <AdminDashboard />,
      },
      {
        name: "Create Admin",
        path: "/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "/create-student",
        element: <CreateStudent />,
      },
    ],
  },
];