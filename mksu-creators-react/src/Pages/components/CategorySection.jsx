
import { CreatorCard } from "./CreatorCard";

export function CategorySection(props) {
  return (
    <div>
      <div className="tiles-title-div">
        <h2 id="dancers" className="tiles-title">
          Pick your {props.category} of the year
        </h2>
      </div>
      <div className="preview-tiles js-dancers">
        <CreatorCard
          name="Migichi"
          followers="3"
          year="2"
          image="images/WhatsApp Image 2026-04-21 at 2.53.05 PM (1).jpeg"
        />
        <CreatorCard
          name="Mukeli"
          followers="5"
          year="2"
          image="images/mukeli.jpg"
        />
      </div>
    </div>
  );
}