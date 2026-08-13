export function CreatorCard({
  creator,
  selectedCreators,
  setSelectedCreators,
  selectedCategories,
  setSelectedCategories,
  isClicked,
  setIsClicked,
}) {
  const { name, image, followers, year, category } = creator;

  function selectCreator() {
    setSelectedCreators([...selectedCreators, creator]);
    setSelectedCategories([...selectedCategories, category]);
    setIsClicked([...isClicked, name]);
  }

  function discardCreator() {
    const newSelectedCreators = selectedCreators.filter(
      (creator) => creator.name !== name,
    );
    const newSelectedCategories = selectedCategories.filter(
      (cat) => cat !== category,
    );
    const newIsClicked = isClicked.filter((value) => value !== creator.name);

    setSelectedCreators(newSelectedCreators);
    setSelectedCategories(newSelectedCategories);
    setIsClicked(newIsClicked);
  }

  return (
    <div
      key={`${name}-${category}`}
      className="relative h-75 min-w-60 flex-0 rounded-lg"
    >
      <div className="rounded-[inherit] min-w-[inherit] h-[inherit] overflow-hidden">
        <img
          src={image ? image : "default.png"}
          alt="creator image"
          className=" object-cover min-w-[inherit] h-[inherit]"
        />
      </div>
      {/* overlay */}
      <div className=" absolute top-0 rounded-[inherit] min-w-[inherit] h-[inherit] bg-linear-to-b from-neutral/0 to-tertiary/90" />
      <div className="absolute flex flex-col gap-2 bottom-3 px-6 rounded-b-2xl w-full text-neutral">
        <div className="flex flex-col items-center ">
          <span className="font-semibold text-xl md:text-2xl">{name}</span>
          <div className="flex gap-3 text-xs text-neutral/80">
            <span>{followers}</span>
            <span>&#8226;</span>
            <span>Year {year}</span>
          </div>
        </div>
        {!selectedCategories.includes(category) ? (
          <button className=" rounded-sm h-10" onClick={selectCreator}>
            Vote Now
          </button>
        ) : isClicked.includes(name) ? (
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
