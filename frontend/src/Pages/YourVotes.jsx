import { toast } from "react-toastify";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useEffect } from "react";

export function YourVotes({
  selectedCreators,
  selectedCategories,
  setSelectedCreators,
  setSelectedCategories,
  isClicked,
  setIsClicked,
}) {
  const navigate = useNavigate();

  function clearCreators() {
    setSelectedCreators([]);
    setSelectedCategories([]);
    setIsClicked([]);
  }

  useEffect(() => {
    setTimeout(() => {
      if (selectedCreators.length === 0) {
        navigate("/");
      }
    }, 500);
  }, [navigate, selectedCreators]);

  return (
    <div>
      <Header />

      <div className="relative mt-30 max-w-200 mx-auto flex flex-col gap-4 border border-tertiary/20 dark:border-neutral/20 pt-2 pb-6 rounded-2xl">
        <div
          onClick={() => navigate("/")}
          className="absolute left-6 top-3 text-tertiary/80 dark:text-neutral/80 text-sm flex gap-1 transition-transform hover:-translate-x-1 items-center hover:text-secondary cursor-pointer"
        >
          {" "}
          <IoArrowBack className="inline" />
          <span>back</span>
        </div>
        <p className="font-bold mx-auto border-b leading-8 border-inherit">
          Confirm your votes
        </p>

        {/* creators */}
        <div className="grid space-y-4 grid-cols-2 sm:grid-cols-3">
          {selectedCreators.map((creator) => {
            const { name, image, category } = creator;

            function discardCreator() {
              const newSelectedCreators = selectedCreators.filter(
                (creator) => creator.name !== name,
              );
              const newSelectedCategories = selectedCategories.filter(
                (cat) => cat !== category,
              );
              const newIsClicked = isClicked.filter(
                (value) => value !== creator.name,
              );

              setSelectedCreators(newSelectedCreators);
              setSelectedCategories(newSelectedCategories);
              setIsClicked(newIsClicked);
            }

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
                  <button className="w-[80%] mx-auto" onClick={discardCreator}>
                    Remove
                  </button>
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
