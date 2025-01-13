import { Route } from "react-router";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import MainLayout from "../components/layout/MainLayout";

const AdminRoutes = () => (
  <Route path="/admin" element={<MainLayout />}>
    <Route index element={<AdminDashboard />} />
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="create-admin" element={<CreateAdmin />} />
    <Route path="create-student" element={<CreateStudent />} />
    <Route path="create-faculty" element={<CreateFaculty />} />
  </Route>
);

export default AdminRoutes;