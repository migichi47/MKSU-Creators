import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { HomePage } from "./Pages/home-page/HomePage";
import { AdminPage } from "./admin-pages/AdminPage";
import { CreatorsPage } from "./admin-pages/CreatorsPage";
import { AdminAddCreator } from "./admin-pages/add-creator/AddCreator";
import { YourVotes } from "./Pages/your-votes/YourVotes";
import { ContextProvider } from "./context/ContextProvider";
import { AdminContextProvider } from "./admin-pages/AdminContextProvider";
import { JoinContextProvider } from "./Pages/join/JoinContextProvider";
import { Join } from "./Pages/join/Join";
import { AdminLogin } from "./admin-pages/auth/Login";
import "react-toastify/dist/ReactToastify.css";
import { MainLayout } from "./Pages/MainLayout";
import { AdminLayout } from "./admin-pages/AdminLayout";

export default function App() {
  return (
    <ContextProvider>
      <AdminContextProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/your-votes" element={<YourVotes />} />
          </Route>
          <Route
            path="/join"
            element={
              <JoinContextProvider>
                <Join />
              </JoinContextProvider>
            }
          />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route element={<AdminLayout />}>
            <Route path="admin" element={<AdminPage />} />
            <Route path="admin/creators" element={<CreatorsPage />} />
            <Route path="admin/add-creator" element={<AdminAddCreator />} />
          </Route>
        </Routes>
        <ToastContainer />
      </AdminContextProvider>
    </ContextProvider>
  );
}
