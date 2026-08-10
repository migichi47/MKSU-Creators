import { CreatorCard } from "./CreatorCard";
import { creators } from "../../../data/creators";

export function CreatorsGrid() {
  const categories = [...new Set(creators.map((creator) => creator.category))];

  return categories.map((category) => {
    const categoryCreators = creators.filter(
      (creator) => creator.category === category,
    );

    return (
      <section key={category} className="border border-tertiary/20 rounded-2xl">
        <div className=" border-b border-tertiary/20 py-3">
          <h1 className="text-tertiary text-3xl w-fit mx-auto uppercase font-bold">
            {category}s
          </h1>
        </div>

        <div className="mt-4">
          {categoryCreators.map((creator) => {
            return <CreatorCard key={creator.name} creator={creator} />;
          })}
        </div>
      </section>
    );
  });
}
