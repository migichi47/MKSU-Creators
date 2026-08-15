import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { GrUserAdd } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";

import { AdminHeader } from "./components/AdminHeader.jsx";
import { api } from "../../axios.js";
import { Footer } from "../components/Footer.jsx";

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

  async function deleteCreator(id, username) {
    const confirmed = confirm(`delete ${username}?`);
    if (confirmed) {
      try {
        await api.delete(`/creators/${id}`);

        setAllCreators((prev) => prev.filter((creator) => creator._id !== id));
      } catch (error) {
        console.error(error);
      }
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
      <div className="relative top-30 px-10 mb-50 max-w-200 mx-auto">
        <div className="flex py-5 sm:items-center justify-between gap-4 sm:flex-row flex-col">
          <div className="space-y-2">
            <h1 className="font-bold sm:text-xl text-lg">Manage Creators</h1>
            <p className="text-xs">
              View and manage all registered content creators in the system.
            </p>
          </div>
          <div className="space-x-2 flex text-xs">
            <select
              className="shadow-xl border border-tertiary/30 dark:border-neutral/30 rounded-sm px-2 h-6 [&>option]:dark:bg-tertiary outline-0"
              onChange={(e) => {
                setFilterStatus(e.target.value);
              }}
            >
              <option className="" value="all">
                all
              </option>
              <option value="approved">approved</option>
              <option value="pending">pending</option>.
            </select>
            <button
              className="border-0 bg-tertiary dark:bg-neutral dark:text-tertiary text-neutral text-xs font-semibold px-3 py-0 h-6"
              onClick={() => navigate("/admin/add-creator")}
            >
              <span className="text-xs">+</span> New Creator
            </button>
          </div>
        </div>
        <div className="border border-tertiary/30 dark:border-neutral/30 rounded-2xl relative sm:top-6">
          <table className="w-full">
            <thead>
              <tr className="[&>th]:font-bold bg-tertiary/10 border-b border-tertiary/30 dark:border-neutral/30 h-10 text-xs ">
                <th className="rounded-tl-xl hidden sm:none">Name</th>
                <th>Handle</th>
                <th>Category</th>
                <th>Platform</th>
                <th>Followers</th>
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
                  <tr
                    key={id}
                    className="h-10 border-t border-tertiary/30 dark:border-neutral/30 [&>td]:text-center text-xs"
                  >
                    <td className="hidden sm:block sm:font-normal">
                      {fullName}
                    </td>
                    <td className="font-semibold">{username}</td>
                    <td>{category}</td>
                    <td>{platform}</td>
                    <td>{(followers / 1000).toFixed(1)} k</td>
                    <td>
                      {status === "pending" ? (
                        <GrUserAdd
                          onClick={() => verifyCreator(id)}
                          className="text-sm mx-auto text-secondary cursor-pointer hover:scale-120 duration-200"
                        />
                      ) : (
                        <span className="verified-check">
                          <MdOutlineVerified className="text-primary mx-auto text-sm" />
                        </span>
                      )}
                    </td>

                    <td
                      className="delete-creator-btn"
                      onClick={() => {
                        deleteCreator(id, username);
                      }}
                    >
                      <RiDeleteBin6Line className="mx-auto text-sm hover:text-secondary cursor-pointer" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        onClick={() => navigate("/admin")}
        className="absolute left-6 top-25 z-1 text-tertiary/80 dark:text-neutral/80 text-sm flex gap-1 transition-transform hover:-translate-x-1 items-center hover:text-secondary cursor-pointer"
      >
        {" "}
        <IoArrowBack className="inline" />
        <span>back</span>
      </div>
      <Footer />
    </>
  );
}
