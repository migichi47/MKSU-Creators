import { Header } from "../components/Header";
import { AdminSidebar } from "../utils/AdminSidebar";
import "./general.css";

export function AdminPage() {

  return (
    <>
      <Header />
      <AdminSidebar />
      <div>dashboard</div>
    </>
  );
}
