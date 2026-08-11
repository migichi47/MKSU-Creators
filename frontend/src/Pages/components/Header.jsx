import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiLight } from "react-icons/ci";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <div className="fixed top-0  min-h-22 w-full flex z-10 items-center justify-between backdrop-blur-xs shadow-lg px-6 dark:bg-tertiary/50">
        <div className="text-2xl cursor-pointer">
          <span className="text-tertiary dark:text-neutral">MKSU</span>
          <span className="text-primary">grammys</span>
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
              <FaRegMoon
                className="hover:text-secondary w-7 h-7 md:w-5 md:h-5"
                onClick={toggleDarkMode}
              />
            ) : (
              <CiLight
                className="hover:text-secondary w-7 h-7 md:w-5 md:h-5"
                onClick={toggleDarkMode}
              />
            )}
          </div>
        </div>
      </div>
      {
        /* separate menu */
        showMenu && (
          <div className="fixed bg-neutral/80 md:hidden dark:bg-tertiary/0 dark:border dark:border-neutral/20 text-xl gap-2 right-10 top-24  backdrop-blur- z-10 flex flex-col border border-tertiary/20 shadow-lg px-8 py-4 rounded-2xl">
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
