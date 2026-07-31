import { Header } from "./components/Header";
import "./AdminPage.css/general.css";
import { useState } from "react";

export function AdminPage(props) {
  const { creators } = props;
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
        <div>{isOpen ? "Analytics" : "📈"}</div>
      </div>

      <div className="creator-table-container">
        <p className="creator-table-title">Creators</p>
        <hr />
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
            {creators.map((user) => {
              const { name, username, category, followers, platform } = user;
              return (
                <tr key={username}>
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
