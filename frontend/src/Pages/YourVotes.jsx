import { toast } from "react-toastify";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function YourVotes({ selectedCreators, setSelectedCreators }) {
  function clearCreators() {
    setSelectedCreators([]);
  }
  return (
    <div>
      <Header />

      <div className="mt-30 max-w-200 mx-auto flex flex-col gap-4 border border-tertiary/20 dark:border-neutral/20 pt-2 pb-6 rounded-2xl">
        <p className="font-bold mx-auto border-b leading-8 border-inherit">
          Confirm the creators you picked
        </p>

        {/* creators */}
        <div className="grid space-y-4 grid-cols-2 sm:grid-cols-3">
          {selectedCreators.map((creator) => {
            const { name, image, category } = creator;

            return (
              <div
                key={`${name}-${category}`}
                className="relative md:h-90 md:w-60 h-70 w-45 rounded-lg mx-auto"
              >
                <img
                  src={image ? image : "default.png"}
                  alt="creator image"
                  className="rounded-[inherit] w-[inherit] h-[inherit]"
                />
                {/* overlay */}
                <div className=" absolute top-0 rounded-[inherit] w-[inherit] h-[inherit] bg-linear-to-b from-neutral/0 to-tertiary/90" />

                <div className="absolute flex flex-col gap-2 bottom-3 px-6 rounded-b-2xl w-full text-neutral">
                  <div className="flex flex-col text-center items-center">
                    <span className="font-semibold text-xl md:text-2xl">
                      {name}
                    </span>
                    <div className="flex gap-3 text-xs text-neutral/80">
                      {category}
                    </div>
                  </div>
                  <button className="w-[80%] mx-auto">Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* action buttons */}
      <div className="mx-auto w-fit mt-10 flex gap-6 [&>a]:px-6 [&>a]:py-2 [&>a]:rounded-full [&>a]:cursor-pointer [&>a]:hover:scale-110 [&>a]:transition-all duration-200 [&>a]:hover:shadow-lg">
        <a className="bg-green-500/80" onClick={() => toast("Votes confirmed")}>
          Confirm Votes
        </a>
        <a className="bg-red-500/80" onClick={clearCreators}>
          Clear All
        </a>
      </div>

      <Footer />
    </div>
  );
}
