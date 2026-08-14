import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../axios.js";

export function CreatorsPage() {
  const [allCreators, setAllCreators] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  // const { creators, setCreators } = props;
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllCreators() {
      try {
        const response = await api.get("/creators/all");
        setAllCreators(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllCreators();
  }, []);

  async function deleteCreator(id) {
    try {
      await api.delete(`/creators/${id}`);

      setAllCreators((prev) => prev.filter((creator) => creator._id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  const filteredCreators =
    filterStatus === "all"
      ? allCreators
      : filterStatus === "approved"
        ? allCreators.filter((creator) => creator.status === "approved")
        : allCreators.filter((creator) => creator.status === "pending");

  async function verifyCreator(id) {
    try {
      const response = await api.patch(`/creators/${id}/approve`);

      setAllCreators((prev) =>
        prev.map((creator) =>
          creator._id === id ? response.data.creator : creator,
        ),
      );
    } catch (err) {
      console.error("Error approving creator:", err);
    }
  }

  return (
    <>
      <div className="creator-table-container">
        <div className="creator-table-title">
          Creators
          <div className="select-status">
            <select
              className="select-category-dropdown"
              onChange={(e) => {
                setFilterStatus(e.target.value);
              }}
            >
              <option value="all">all</option>
              <option value="approved">approved</option>
              <option value="pending">pending</option>
            </select>
          </div>
          <div>
            <button
              className="add-creator"
              onClick={() => navigate("/admin/add-creator")}
            >
              +
            </button>
          </div>
        </div>
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
                      deleteCreator(id);
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
