import { creators } from "../../../data/creators";
import { CreatorCard } from "./CreatorCard";

import "./CategorySection.css";

export function CategorySection(props) {
  return (
    <div>
      {creators[props.category]?.length > 0 && (
        <div className="tiles-title-div">
        <h2 id="dancers" className="tiles-title">
          Pick your {props.category} of the year
        </h2>
      </div>
      )}
      
      <div className="preview-tiles">
        {creators[props.category].map((creator) => {
          if (creator.name) {
            return (
              <CreatorCard
                image={creator.image}
                name={creator.name}
                followers={Number(creator.followers / 1000)}
                key={crypto.randomUUID()}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
