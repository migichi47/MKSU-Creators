import { useContext, useState } from "react";
import { CreatorsGrid } from "../components/CreatorsGrid";
import { CreatorContext } from "../../context/ContextProvider";
import { Hero } from "./Hero";
import { RenderModal } from "./RenderModal";
import { YourVotes } from "./YourVotes";

export function HomePage() {
  const { creators, categories } = useContext(CreatorContext);
  const [renderModal, setRenderModal] = useState(true);

  return (
    <div className="">
      <Hero />
      <CreatorsGrid creators={creators} categories={categories} />
      <YourVotes />
      <RenderModal renderModal={renderModal} setRenderModal={setRenderModal} />
    </div>
  );
}
