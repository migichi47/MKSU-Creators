import { CreatorCard } from "./CreatorCard";
import { creators } from "../../../data/creators";

export function CreatorsGrid() {
  const categories = [...new Set(creators.map((creator) => creator.category))];

  return (
    <div className="flex flex-col gap-35">
      {categories.map((category) => {
        const categoryCreators = creators.filter(
          (creator) => creator.category === category,
        );

        return (
          <section
            key={category}
            id={category}
            className="border border-secondary/50 dark:border-neutral/50 rounded-2xl w-[98%] mx-auto max-w-7xl"
          >
            <div className=" border-b border-secondary/50 dark:border-neutral/50 py-3 relative">
              <h1 className="text-tertiary text-3xl w-fit mx-auto uppercase font-bold">
                {category}s
              </h1>

              <span className="w-fit pr-10 absolute top-4 right-0">
                View More
              </span>
            </div>

            <div className="mt-4 flex overflow-scroll gap-6 pl-1">
              {categoryCreators.map((creator) => {
                return <CreatorCard key={creator.name} creator={creator} />;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
