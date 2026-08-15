import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AdminHeader } from "./components/AdminHeader.jsx";
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
      <AdminHeader />
      <div className="relative top-22 px-10">
        <div className="flex py-5 items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Manage Creators</h1>
            <p className="text-xs">
              View and manage all registered content creators in the system.
            </p>
          </div>
          <div className="space-x-2">
            <select
              className="shadow-xl border border-tertiary/20 rounded-sm px-2 py-1"
              onChange={(e) => {
                setFilterStatus(e.target.value);
              }}
            >
              <option value="all">all</option>
              <option value="approved">approved</option>
              <option value="pending">pending</option>.
            </select>
            <button
              className="border-0 bg-tertiary text-neutral text-xs font-bold px-3 pb-1"
              onClick={() => navigate("/admin/add-creator")}
            >
              <span className="text-xl">+</span> New Creator
            </button>
          </div>
        </div>
        <div className="border border-tertiary/30 rounded-2xl">
          <table className="w-full">
            <thead>
              <tr className="[&>th]:font-normal bg-tertiary/10 border-b border-tertiary/30 h-8">
                <th className="rounded-tl-xl">Name</th>
                <th>handle</th>
                <th>Category</th>
                <th>platform</th>
                <th>followers</th>
                <th>Status</th>
                <th className="rounded-tr-xl">Actions</th>
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
                  <tr key={id} className="h-10 border-t border-tertiary/30 [&>td]:text-center">
                    <td>{fullName}</td>
                    <td className="font-semibold">{username}</td>
                    <td>{category}</td>
                    <td>{platform}</td>
                    <td>{followers}</td>
                    <td>
                      {status === "pending" ? (
                        <button onClick={() => verifyCreator(id)}>
                          verify
                        </button>
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
      </div>
    </>
  );
}
