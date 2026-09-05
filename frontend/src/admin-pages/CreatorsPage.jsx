import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { GrUserAdd } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { api } from "../axios.js";
import { AddCreatorContext } from "./AdminContextProvider.jsx";

export function CreatorsPage() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [search, setSearch] = useState("");

  const { allCreators, setAllCreators } = useContext(AddCreatorContext);
  const navigate = useNavigate();

  async function deleteCreator(id, username) {
    const confirmed = confirm(`delete ${username}?`);
    if (confirmed) {
      try {
        await api.delete(`api/admin/creators/${id}`);
        setAllCreators((prev) => prev.filter((creator) => creator._id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  }

  const filteredCreators = allCreators.filter((creator) => {
    const matchesStatus =
      filterStatus === "all" || creator.status === filterStatus;
    const matchesSearch =
      creator.fullName.toLowerCase().includes(search?.toLowerCase()) ||
      creator.username.toLowerCase().includes(search?.toLowerCase());
    return matchesSearch && matchesStatus;
  });

  async function verifyCreator(id) {
    try {
      const response = await api.patch(`/api/admin/approve/${id}`);

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
      <div className="relative top-30 px-10 mb-50 max-w-200 mx-auto space-y-4 sm:space-y-1">
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
              <option value="pending">pending</option>
            </select>
            <button
              className="border-0 bg-tertiary dark:bg-neutral dark:text-tertiary text-neutral text-xs font-semibold px-3 py-0 h-6"
              onClick={() => navigate("/admin/add-creator")}
            >
              <span className="text-xs">+</span> New Creator
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="border relative w-50 dark:border-neutral/30 border-tertiary/30 rounded-sm">
            <span className="absolute top-1 left-1">
              <CiSearch />
            </span>
            <input
              type="text"
              placeholder="search creator"
              className="relative left-8 w-42 text-xs outline-0 text-tertiary dark:text-neutral"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase)}
            />
          </div>
        </div>
        <div className="border border-tertiary/30 dark:border-neutral/30 rounded-2xl relative sm:top-6 overflow-x-scroll scrollbar-track-transparent">
          <table className="w-full min-w-120">
            <thead>
              <tr className="[&>th]:font-bold bg-tertiary/10 dark:bg-neutral/10 border-b border-tertiary/30 dark:border-neutral/30 h-10 text-xs ">
                <th>Name</th>
                <th>Handle</th>
                <th>Category</th>
                <th>Platform</th>
                <th>Followers</th>
                <th>Status</th>
                <th>Actions</th>
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
                    <td className="">{fullName}</td>
                    <td className="font-semibold text-sm">{username}</td>
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
    </>
  );
}
