import { creators } from "../../../data/creators";
import { CreatorCard } from "./CreatorCard";

import "./CategorySection.css";

export function CategorySection(props) {

  return (
    <div>
      {creators[props.category]?.length > 0 && (
        <div className="tiles-title-div">
          <h2 id="dancers" className="tiles-title">
            Pick your {props.category.slice(0, -1)} of the year
          </h2>
        </div>
      )}

      <div className="preview-tiles">
        {creators[props.category].map((creator) => {
          const isCategoryUsed = props.selectedCategories.includes(props.category);

          if (creator.name) {
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
