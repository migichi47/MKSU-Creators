import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { AdminHeader } from "../components/AdminHeader";
import { AddCreatorForm } from "./AddCreatorForm";

export function AdminAddCreator() {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeader />
      <div className="relative top-35 px-10 space-y-10 max-w-150 mx-auto mb-50">
        <div>
          <h1 className="font-bold text-2xl">Register New Creator</h1>
          <p className="text-xs text-neutral/80">
            Enter the details of the creator to add them to the election monitor
            database. Ensure all information is accurate.
          </p>
        </div>
        <AddCreatorForm />
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
