import { creators } from "../../../data/creators";
import { CreatorCard } from "./CreatorCard";

import "./CategorySection.css";

export function CategorySection(props) {
  return (
    <div>
      {creators?.length > 0 && (
        <div className="tiles-title-div">
          <h2 id="dancers" className="tiles-title">
            Pick your {props.category} of the year
          </h2>
        </div>
      )}

      <div className="scroll">Scroll &gt;&gt;</div>
      <div className="preview-tiles">
        {creators.map((creator) => {
          const isCategoryUsed = props.selectedCategories.includes(
            creator.category,
          );

          if (creator.name && props.category.includes(creator.category)) {
            return (
              <CreatorCard
                image={creator.image}
                name={creator.name}
                followers={Number(creator.followers / 1000)}
                key={crypto.randomUUID()}
                setSelectedCreators={props.setSelectedCreators}
                selectedCreators={props.selectedCreators}
                isVotingPage={true}
                category={props.category}
                setSelectedCategories={props.setSelectedCategories}
                selectedCategories={props.selectedCategories}
                isCategoryUsed={isCategoryUsed}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
