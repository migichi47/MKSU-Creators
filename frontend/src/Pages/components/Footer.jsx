import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full bottom-0 border-t backdrop-blur-xl border-tertiary/20 dark:border-neutral/20 text-center pt-6 pb-8 flex flex-col gap-4 mt-10 text-xs">
      <div className="text-secondary/60 [&>a]:underline dark:text-neutral/80 flex gap-8 mx-auto [&>a:hover]:underline [&>a:hover]:text-tertiary/60 dark:[&>a:hover]:text-secondary transition-colors">
        <a href="#" className="">
          Privacy Policy
        </a>
        <a href="#" className="">
          Terms of Excellence
        </a>
        <a href="#" className="">
          Sponsors
        </a>
        <a href="#" className="">
          Get in Touch
        </a>
      </div>
      <span className="text-primary/90">
        &copy;2026 MKSU Creators Awards. All rights reserved
      </span>
      <button onClick={() => navigate("/admin")} className="w-fit mx-auto p-2">
        Dev tools
      </button>
    </div>
  );
}
