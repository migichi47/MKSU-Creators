import { CreatorCard } from "./CreatorCard";

export function CreatorsGrid() {
  return (
    <div>
      <div>
        <h1>Dancers</h1>
        <div>
          <CreatorCard />
        </div>
      </div>

      <div>
        <h1>Vloggers</h1>
        <div>
          <CreatorCard />
        </div>
      </div>
    </div>
  );
}
