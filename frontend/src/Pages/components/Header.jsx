
import { FaRegMoon } from "react-icons/fa";

export function Header() {
  return (
    <div className="fixed top-0  min-h-22 w-full flex z-10 items-center justify-between backdrop-blur-xs border-b border-neutral/20 px-6">
      <div className="text-2xl cursor-pointer">
        <span className="text-tertiary">MKSU</span>
        <span className="text-primary">grammys</span>
      </div>

      <div className="flex space-x-8 items-center">
        <div className="flex space-x-3 text-tertiary eac">
          <a href="" className="hover:text-secondary">
            Dancers
          </a>
          <a href="" className="hover:text-secondary">
            Vloggers
          </a>
          <a href="" className="hover:text-secondary">
            Influencers
          </a>
          <a href="" className="hover:text-secondary">
            Comedians
          </a>
          <a href="" className="hover:text-secondary">
            Musicians
          </a>
        </div>

        <div>
          <FaRegMoon />
        </div>
      </div>
    </div>
  );
}
