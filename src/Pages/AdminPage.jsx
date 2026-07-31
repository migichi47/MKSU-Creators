import { Header } from "./components/Header";
import "./AdminPage.css/general.css";
import { useState } from "react";

export function AdminPage(props) {
  const { creators } = props;
  console.log(creators);
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

      <div className="creator-table-container">
        <table className="creator-table">
          <thead>
            <th>Name</th>
            <th>handle</th>
            <th>Category</th>
            <th>platform</th>
            <th>followers</th>
          </thead>
          <tbody>
            {creators.map((user) => {
              const { name, username, category, followers, platform } = user;
              return (
                <tr>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{category}</td>
                  <td>{platform}</td>
                  <td>{followers}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
