import { useContext } from "react";
import { CreatorContext } from "../../context/ContextProvider";

export function CreatorCard({ creator }) {
  const { username, image, followers, year, category, _id } = creator;
  const id = _id;

  const {
    setSelectedCreators,
    setSelectedCategories,
    selectedCategories,
    selectedCreators,
    setIsClicked,
    isClicked,
  } = useContext(CreatorContext);

  function selectCreator() {
    setSelectedCreators([...selectedCreators, creator]);
    setSelectedCategories([...selectedCategories, category]);
    setIsClicked([...isClicked, id]);
  }

  function discardCreator() {
    const newSelectedCreators = selectedCreators.filter(
      (creator) => creator._id !== id,
    );
    const newSelectedCategories = selectedCategories.filter(
      (cat) => cat !== category,
    );
    const newIsClicked = isClicked.filter((value) => value !== creator._id);

    setSelectedCreators(newSelectedCreators);
    setSelectedCategories(newSelectedCategories);
    setIsClicked(newIsClicked);
  }

  return (
    <div key={id} className="relative h-75 min-w-60 flex-0 rounded-lg group">
      <div className="rounded-[inherit] min-w-[inherit] h-[inherit] overflow-hidden">
        <img
          src={image ? image : "default.png"}
          alt="creator image"
          className=" object-cover min-w-[inherit] h-[inherit] group-hover:scale-110 duration-300"
        />
      </div>
      {/* overlay */}
      <div className=" absolute top-0 rounded-[inherit] min-w-[inherit] h-[inherit] bg-linear-to-b from-neutral/0 to-tertiary/90" />
      <div className="absolute flex flex-col gap-2 bottom-3 px-6 rounded-b-2xl w-full text-neutral">
        <div className="flex flex-col items-center ">
          <span className="font-semibold text-xl md:text-2xl">{username}</span>
          <div className="flex gap-3 text-[10px] font-semibold text-zinc-400">
            <span>{followers / 1000}k followers</span>
            <span>&#8226;</span>
            <span>Year {year}</span>
          </div>
        </div>
        {!selectedCategories.includes(category) ? (
          <button
            className=" rounded-sm h-8 w-30 mx-auto"
            onClick={selectCreator}
          >
            Vote Now
          </button>
        ) : isClicked.includes(id) ? (
          <button
            onClick={discardCreator}
            className="w-20 mx-auto border-secondary bg-amber-50/0 hover:text-tertiary hover:bg-neutral"
          >
            Discard
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
