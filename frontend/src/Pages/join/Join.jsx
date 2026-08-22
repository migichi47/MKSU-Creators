import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { JoinForm } from "./JoinForm";
import { CallToActionButtons } from "./CallToActionButtons";

export function Join() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative top-35 px-10 space-y-10 max-w-150 mx-auto mb-50">
        <div>
          <h1 className="font-bold text-2xl">Join as a Creator</h1>
          <p className="text-xs text-neutral/80">
            Enter your details below. Ensure all information is accurate.
          </p>
        </div>
        <JoinForm />
        <CallToActionButtons />
      </div>
      <div
        onClick={() => navigate("/")}
        className="absolute left-6 top-25 z-1 text-tertiary/80 dark:text-neutral/80 text-sm flex gap-1 transition-transform hover:-translate-x-1 items-center hover:text-secondary cursor-pointer"
      >
        {" "}
        <IoArrowBack className="inline" />
        <span>back</span>
      </div>
    </>
  );
}