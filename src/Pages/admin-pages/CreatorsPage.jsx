import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { AdminSidebar } from "../utils/AdminSidebar";

import "./creator-page.css";

export function CreatorsPage(props) {
  const { creators } = props;
  const navigate = useNavigate();

  return (
    <>
      <AdminSidebar />
      <Header />
      <div className="creator-table-container">
        <p className="creator-table-title">
          Creators{" "}
          <div
            className="add-creator"
            onClick={() => navigate("/admin/add-creator")}
          >
            ➕
          </div>
        </p>
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
