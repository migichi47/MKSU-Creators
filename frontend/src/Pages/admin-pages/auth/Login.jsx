import { LiaAwardSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center h-screen">
      <form className="shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)] flex flex-col w-fit mx-auto items-center gap-3 p-8 rounded-sm">
        <div
          className="cursor-pointer flex space-x-1 font-semibold text-sm"
          onClick={() => navigate("/")}
        >
          <span className="text-tertiary dark:text-neutral">MKSU</span>
          <span className="text-primary">
            Gr
            <LiaAwardSolid className="inline w-4" />
            mmys
          </span>
        </div>
        <h1 className="font-bold text-xl ">Welcome</h1>
        <p className="text-zinc-500 text-xs">
          Log in to continue to Admin Page
        </p>
        <input
          type="text"
          placeholder="email"
          className="border border-zinc-300 p-2 w-70 outline-secondary/70"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="border border-zinc-300 p-2 w-70 outline-secondary/70"
          />
          <div
            className="absolute top-[30%] right-4 text-zinc-500 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
        <div className="flex justify-start w-full">
          <span className="text-secondary font-semibold text-xs cursor-pointer hover:text-secondary/80 hover:underline transition-colors">
            Forgot Password?
          </span>
        </div>
        <button
          type="submit"
          className="w-full py-2 border-0 bg-tertiary text-white group hover:bg-tertiary/90"
        >
          <span className="text-[15px] group-hover:text-[16px] duration-100">Continue</span>
        </button>
        <div className="flex w-full justify-start text-sm items-center gap-2">
          <span className="font-light text-xs">Don't have an account?</span>
          <span className="font-semibold text-secondary cursor-pointer hover:text-secondary/80 hover:underline transition-colors">
            Sign up
          </span>
        </div>
      </form>
    </div>
  );
}
