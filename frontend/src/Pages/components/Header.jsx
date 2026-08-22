import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiLight } from "react-icons/ci";
import { LiaAwardSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
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
      <div className="fixed top-0  min-h-22 w-full flex z-10 items-center justify-between backdrop-blur-xs shadow-lg px-6 dark:bg-tertiary/50">
        <div
          className="cursor-pointer flex space-x-2 font-bold text-lg md:text-2xl "
          onClick={() => navigate("/")}
        >
          <span className="text-tertiary dark:text-neutral">MKSU</span>
          <span className="text-primary">
            Gr
            <LiaAwardSolid className="inline w-5" />
            mmys
          </span>
        </div>

        <div className="flex space-x-8 items-center">
          <div className="hidden space-x-3 md:flex">
            <a href="#dancer" className="hover:text-secondary">
              Dancers
            </a>
            <a href="#vlogger" className="hover:text-secondary">
              Vloggers
            </a>
            <a href="#influencer" className="hover:text-secondary">
              Influencers
            </a>
            <a href="#comedian" className="hover:text-secondary">
              Comedians
            </a>
            <a href="#musician" className="hover:text-secondary">
              Musicians
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
          <div className="fixed bg-neutral/80 md:hidden dark:bg-tertiary/30 dark:border dark:border-neutral/20 text-xl gap-2 right-10 top-24  dark:backdrop-blur-sm z-10 flex flex-col border border-tertiary/20 shadow-lg px-8 py-4 rounded-2xl slide-from-top duration-400">
            <a
              href="#dancer"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Dancers
            </a>
            <a
              href="#vlogger"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Vloggers
            </a>
            <a
              href="#influencer"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Influencers
            </a>
            <a
              href="#comedian"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Comedians
            </a>
            <a
              href="#musician"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Musicians
            </a>
          </div>
        )
      }
    </>
  );
}
