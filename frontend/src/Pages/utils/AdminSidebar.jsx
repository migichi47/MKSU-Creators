import { useState } from "react";

// react icons
import { FaUsers, FaHome, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { useNavigate, useLocation } from "react-router-dom";

import "./admin-sidebar.css";

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`admin-sidebar ${!isOpen && "admin-sidebar-closed"} 
        ${!active && "admin-sidebar-inactive"}
        `}
    >
      <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </button>
      <div
        onClick={() => {
          navigate("/admin");
        }}
        className={location.pathname === "/admin" && active ? "active-tab" : ""}
      >
        {isOpen ? "Dashboard" : active ? <FaHome /> : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/creators");
        }}
        className={
          location.pathname === "/admin/creators" && active ? "active-tab" : ""
        }
      >
        {isOpen ? "Creators" : active ? <FaUsers /> : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/analytics");
        }}
        className={
          location.pathname === "/admin/analytics" && active ? "active-tab" : ""
        }
      >
        {isOpen ? "Analytics" : active ? <FaChartSimple /> : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/add-creator");
        }}
        className={
          location.pathname === "/admin/add-creator" && active
            ? "active-tab"
            : ""
        }
      >
        {isOpen ? "Add a Creator" : active ? <IoMdPersonAdd /> : ""}
      </div>
      {!isOpen && (
        <div
          className={`sidebar-arrow ${!active && "sidebar-arrow-down"}`}
          onClick={() => setActive(!active)}
        >
          {active ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      )}
    </div>
  );
}
