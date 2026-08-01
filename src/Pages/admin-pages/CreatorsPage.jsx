import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { AdminSidebar } from "../utils/AdminSidebar";

import "./creator-page.css";

export function CreatorsPage(props) {
  const { creators, setCreators } = props;
  const navigate = useNavigate();

  async function deleteCreator(username, id) {
    await fetch(`http://localhost:3000/creators/${id}`, {
      method: "DELETE",
    });

    setCreators((prev) => prev.filter((creator) => creator._id !== id));
  }

  return (
    <>
      <AdminSidebar />
      <Header />
      <div className="creator-table-container">
        <div className="creator-table-title">
          Creators{" "}
          <div
            className="add-creator"
            onClick={() => navigate("/admin/add-creator")}
          >
            ➕
          </div>
        </div>
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
              const { fullName, username, category, followers, platform, _id } =
                user;

              const id = _id;
              return (
                <tr key={id}>
                  <td>{fullName}</td>
                  <td>{username}</td>
                  <td>{category}</td>
                  <td>{platform}</td>
                  <td>{followers}</td>
                  <td
                    className="delete-creator-btn"
                    onClick={() => {
                      const isConfirmed = confirm(`Delete ${username} ??`);
                      console.log(confirm);
                      if (isConfirmed) {
                        deleteCreator(username, id);
                      } else return;
                    }}
                  >
                    ❌
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
