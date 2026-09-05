import { Outlet } from "react-router-dom";
import { Footer } from "../Pages/components/Footer";
import { AdminHeader } from "./components/AdminHeader";

export function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <Footer />
    </>
  );
}
