import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AdminSidebar } from "../utils/AdminSidebar";

import "./creator-page.css";

export function CreatorsPage() {
  const [allCreators, setAllCreators] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  // const { creators, setCreators } = props;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/creators/all")
      .then((response) => response.json())
      .then((data) => setAllCreators(data));
  }, []);

  async function deleteCreator(username, id) {
    await fetch(`http://localhost:3000/creators/${id}`, {
      method: "DELETE",
    });

    setAllCreators((prev) => prev.filter((creator) => creator._id !== id));
  }

  const filteredCreators =
    filterStatus === "all"
      ? allCreators
      : filterStatus === "approved"
        ? allCreators.filter((creator) => creator.status === "approved")
        : allCreators.filter((creator) => creator.status === "pending");

  async function verifyCreator(id) {
    try {
      const response = await fetch(
        `http://localhost:3000/creators/${id}/approve`,
        {
          method: "PATCH",
        },
      );

      const data = await response.json();

      setAllCreators((prev) =>
        prev.map((creator) => (creator._id === id ? data.creator : creator)),
      );
    } catch (err) {
      console.error("Error approving creator:", err);
    }
  }

  return (
    <>
      <AdminSidebar />
      <Header description="View Creators" />
      <div className="creator-table-container">
        <div className="creator-table-title">
          Creators
          <div className="select-status">
            <select
              name=""
              id=""
              onChange={(e) => {
                setFilterStatus(e.target.value);
              }}
            >
              <option value="all">all</option>
              <option value="approved">approved</option>
              <option value="pending">pending</option>
            </select>
          </div>
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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCreators.map((user) => {
              const {
                fullName,
                username,
                category,
                followers,
                platform,
                _id,
                status,
              } = user;

              const id = _id;
              return (
                <tr key={id}>
                  <td>{fullName}</td>
                  <td>{username}</td>
                  <td>{category}</td>
                  <td>{platform}</td>
                  <td>{followers}</td>
                  <td>
                    {status === "pending" ? (
                      <button onClick={() => verifyCreator(id)}>verify</button>
                    ) : (
                      <span className="verified-check">✔️</span>
                    )}
                  </td>

                  <td
                    className="delete-creator-btn"
                    onClick={() => {
                      deleteCreator(username, id);
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
