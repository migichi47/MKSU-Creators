import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomePage } from "./Pages/home-page/HomePage";
import { AdminPage } from "./Pages/admin-pages/AdminPage";
import { CreatorsPage } from "./Pages/admin-pages/CreatorsPage";
import { AdminAddCreator } from "./Pages/admin-pages/add-creator/AddCreator";
import { YourVotes } from "./Pages/your-votes/YourVotes";
import { ContextProvider } from "./context/ContextProvider";
import { AdminContextProvider } from "./Pages/admin-pages/AdminContextProvider";

export default function App() {
  return (
    <ContextProvider>
      <AdminContextProvider>
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/your-votes" element={<YourVotes />} />

            <Route path="admin" element={<AdminPage />} />
            <Route path="admin/creators" element={<CreatorsPage />} />
            <Route path="admin/add-creator" element={<AdminAddCreator />} />
          </Routes>
          <ToastContainer />
        </div>
      </AdminContextProvider>
    </ContextProvider>
  );
}
