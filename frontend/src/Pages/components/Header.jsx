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
      <div className="fixed top-0  min-h-22 w-full flex z-10 items-center justify-between backdrop-blur-xs shadow-lg px-6">
        <div className="text-2xl cursor-pointer">
          <span className="text-tertiary dark:text-neutral">MKSU</span>
          <span className="text-primary">grammys</span>
        </div>

        <div className="flex space-x-8 items-center">
          <div className="hidden space-x-3 md:flex">
            <a href="#" className="hover:text-secondary">
              Dancers
            </a>
            <a href="#" className="hover:text-secondary">
              Vloggers
            </a>
            <a href="#" className="hover:text-secondary">
              Influencers
            </a>
            <a href="#" className="hover:text-secondary">
              Comedians
            </a>
            <a href="#" className="hover:text-secondary">
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
          <div className="fixed bg-neutral/50 dark:bg-tertiary/0 dark:border dark:border-neutral/20 dark:backdrop-blur-xs/0 text-xl gap-2 right-10 top-24  backdrop-blur-xs z-10 flex flex-col border border-tertiary/20 shadow-lg px-8 py-4 rounded-2xl">
            <a
              href="#"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Dancers
            </a>
            <a
              href="#"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Vloggers
            </a>
            <a
              href="#"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Influencers
            </a>
            <a
              href="#"
              className="hover:text-secondary"
              onClick={() => setShowMenu(false)}
            >
              Comedians
            </a>
            <a
              href="#"
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
