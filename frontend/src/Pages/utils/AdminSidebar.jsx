import { useState } from "react";

// react icons
import { FaUsers, FaHome, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </button>
      <div
        onClick={() => {
          navigate("/admin");
        }}
      >
        {isOpen ? "Dashboard" : active ? <FaHome /> : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/creators");
        }}
      >
        {isOpen ? "Creators" : active ? <FaUsers /> : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/analytics");
        }}
      >
        {isOpen ? "Analytics" : active ? <FaChartSimple /> : ""}
      </div>
      <div
        onClick={() => {
          navigate("/admin/add-creator");
        }}
        className={!isOpen && "add-creator-sidebar"}
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
