import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`admin-sidebar ${!isOpen && "admin-sidebar-closed"}`}>
      <button className={"hambugger-menu"} onClick={toggleMenu}>
        &#9776;
      </button>
      <div
        onClick={() => {
          navigate("/admin");
        }}
      >
        {isOpen ? "Dashboard" : "🏠"}
      </div>
      <div
        onClick={() => {
          navigate("/admin/creators");
        }}
      >
        {isOpen ? "Creators" : "👥"}
      </div>
      <div
        onClick={() => {
          navigate("/admin/analytics");
        }}
      >
        {isOpen ? "Analytics" : "📈"}
      </div>
    </div>
  );
}
