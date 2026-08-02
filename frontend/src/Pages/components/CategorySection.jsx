import { CreatorCard } from "./CreatorCard";

import "./CategorySection.css";

export function CategorySection(props) {
  const {
    creators,
    category,
    selectedCategories,
    setSelectedCategories,
    setSelectedCreators,
    selectedCreators,
  } = props;

  return (
    <div>
      {creators?.length > 0 && (
        <div className="tiles-title-div">
          <h2 id="dancers" className="tiles-title">
            Pick your {category} of the year
          </h2>
        </div>
      )}

      <div className="scroll">Scroll &gt;&gt;</div>
      <div className="preview-tiles">
        {creators.map((creator) => {
          const isCategoryUsed = selectedCategories.includes(creator.category);

          if (creator.username && category.includes(creator.category)) {
            return (
              <CreatorCard
                id={creator._id}
                image={creator.image}
                name={creator.username}
                followers={Number(creator.followers / 1000)}
                key={crypto.randomUUID()}
                setSelectedCreators={setSelectedCreators}
                selectedCreators={selectedCreators}
                isVotingPage={true}
                category={category}
                setSelectedCategories={setSelectedCategories}
                selectedCategories={selectedCategories}
                isCategoryUsed={isCategoryUsed}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
