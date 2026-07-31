import { Header } from "./components/Header";
import "./AdminPage.css/general.css";
import { useState } from "react";

export function AdminPage() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
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
    </>
  );
}
