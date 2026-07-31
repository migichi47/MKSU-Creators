import { Header } from "./components/Header";
import "./AdminPage.css/general.css";
import { useState } from "react";

export function AdminPage() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const users = [
    { id: 1, name: "John", role: "Admin" },
    { id: 2, name: "Jane", role: "Editor" },
    { id: 3, name: "Mike", role: "User" },
  ];
  return (
    <>
      <Header />
      <div className={`admin-sidebar ${!isOpen && "admin-sidebar-closed"}`}>
        <button className={"hambugger-menu"} onClick={toggleMenu}>
          &#9776;
        </button>
        <div>{isOpen ? "Dashboard" : "🏠"}</div>
        <div>{isOpen ? "Creators" : "👥"}</div>
        <div>{isOpen ? "Dashboard" : "📈"}</div>
      </div>

      <div className="creator-table-container">
        <table className="creator-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>handle</th>
              <th>Category</th>
              <th>platform</th>
              <th>followers</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>tiktok</td>
                <td>30000</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
