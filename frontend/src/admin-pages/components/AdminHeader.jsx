import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiLight } from "react-icons/ci";
import { LiaAwardSolid } from "react-icons/lia";

export function AdminHeader() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      {/* header */}
      <div className="fixed top-0  min-h-22 w-full flex z-10 items-center justify-between backdrop-blur-xs shadow-lg dark:shadow-sm dark:shadow-neutral/20 px-6 dark:bg-tertiary/50">
        <div
          className="cursor-pointer flex space-x-2 font-bold text-lg md:text-2xl "
          onClick={() => navigate("/admin")}
        >
          <span className="text-tertiary dark:text-neutral">MKSU</span>
          <span className="text-primary">
            Gr
            <LiaAwardSolid className="inline w-5" />
            mmys
          </span>
        </div>

        <div className="flex space-x-8 items-center">
          <div className="hidden space-x-3 md:flex [&>a]:cursor-pointer">
            <a
              onClick={() => {
                navigate("/admin");
              }}
              className="hover:text-secondary"
            >
              Dashboard
            </a>
            <a
              onClick={() => {
                navigate("/admin/creators");
              }}
              className="hover:text-secondary"
            >
              View Creators
            </a>
            <a
              onClick={() => navigate("/admin/add-creator")}
              className="hover:text-secondary"
            >
              Add Creator
            </a>
            <a
              onClick={() => {
                navigate("/admin/analytics");
              }}
              className="hover:text-secondary"
            >
              Analytics
            </a>
          </div>

          <div>
            {/* hamburger menu */}
            <GiHamburgerMenu
              className="md:hidden hover:text-secondary w-7 h-7"
              onClick={() => setShowMenu((prev) => !prev)}
            />
          </div>

          <div className="w-fit">
            {darkMode ? (
              <CiLight
                className="hover:text-secondary w-7 h-7 md:w-5 md:h-5"
                onClick={toggleDarkMode}
              />
            ) : (
              <FaRegMoon
                className="hover:text-secondary w-5 h-5 md:w-5 md:h-5"
                onClick={toggleDarkMode}
              />
            )}
          </div>
        </div>
      </div>
      {
        /* separate menu */
        showMenu && (
          <div className="fixed [&>a]:cursor-pointer bg-neutral/80 md:hidden dark:bg-tertiary/30 dark:border dark:border-neutral/20 text-sm gap-5 right-10 top-24  dark:backdrop-blur-sm z-10 flex flex-col border border-tertiary/20 shadow-lg px-8 py-4 rounded-2xl slide-from-top duration-400">
            <a
              onClick={() => {
                setShowMenu(false);
                navigate("/admin");
              }}
              className="hover:text-secondary"
            >
              Dashboard
            </a>
            <a
              onClick={() => {
                setShowMenu(false);
                navigate("/admin/creators");
              }}
              className="hover:text-secondary"
            >
              View Creators
            </a>
            <a
              onClick={() => {
                setShowMenu(false);
                navigate("/admin/add-creator");
              }}
              className="hover:text-secondary"
            >
              Add Creator
            </a>
            <a
              onClick={() => {
                setShowMenu(false);
                navigate("/admin/analytics");
              }}
              className="hover:text-secondary"
            >
              Analytics
            </a>
          </div>
        )
      }
    </>
  );
}
