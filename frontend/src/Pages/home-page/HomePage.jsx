import { CreatorsGrid } from "../components/CreatorsGrid";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useContext, useState } from "react";

import { CreatorContext } from "../../context/ContextProvider";
import { Hero } from "./Hero";
import { RenderModal } from "./RenderModal";
import { YourVotes } from "./YourVotes";

export function HomePage() {
  const { creators, categories } = useContext(CreatorContext);
  const [renderModal, setRenderModal] = useState(true);

  return (
    <div className="">
      <Header />
      <Hero />
      <CreatorsGrid creators={creators} categories={categories} />
      <YourVotes />
      <Footer />
      <RenderModal renderModal={renderModal} setRenderModal={setRenderModal} />
    </div>
  );
}
