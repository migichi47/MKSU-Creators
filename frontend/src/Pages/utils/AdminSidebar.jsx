import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin-sidebar.css";

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(true);

  const navigate = useNavigate();

  return (
    <div
      className={`admin-sidebar ${!isOpen && "admin-sidebar-closed"} ${!active && "admin-sidebar-inactive"}`}
    >
      <button className="hambugger-menu" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <div
        onClick={() => {
          navigate("/admin");
        }}
      >
        {isOpen ? "Dashboard" : active ? "🏠" : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/creators");
        }}
      >
        {isOpen ? "Creators" : active ? "👥" : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/analytics");
        }}
      >
        {isOpen ? "Analytics" : active ? "📈" : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/add-creator");
        }}
        className={!isOpen && "add-creator-sidebar"}
      >
        {isOpen ? "Add a Creator" : active ? "+" : ""}
      </div>
      {!isOpen && (
        <div
          className={`sidebar-arrow ${!active && "sidebar-arrow-down"}`}
          onClick={() => setActive(!active)}
        >
          {active ? "⩓" : "⩖"}
        </div>
      )}
    </div>
  );
}
