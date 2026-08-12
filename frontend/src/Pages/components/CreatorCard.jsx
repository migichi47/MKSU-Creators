
export function CreatorCard({
  creator,
  selectedCreators,
  setSelectedCreators,
}) {
  const { name, image, followers, year, category } = creator;

  function selectCreator() {
    setSelectedCreators([...selectedCreators, creator]);
  }

  return (
    <div
      key={`${name}-${category}`}
      className="relative h-90 min-w-60 rounded-lg"
    >
      <img
        src={image ? image : "default.png"}
        alt="creator image"
        className="rounded-[inherit] min-w-[inherit] h-[inherit]"
      />
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
        <button className=" rounded-sm h-10" onClick={selectCreator}>
          Vote Now
        </button>
      </div>
    </div>
  );
}
