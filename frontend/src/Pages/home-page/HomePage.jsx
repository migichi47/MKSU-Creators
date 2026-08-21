import { CreatorsGrid } from "../components/CreatorsGrid";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { CreatorContext } from "../../context/ContextProvider";
import { Hero } from "./Hero";
import { RenderModal } from "./RenderModal";

export function HomePage() {
  const { selectedCreators, creators, categories } = useContext(CreatorContext);
  const [renderModal, setRenderModal] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="">
      <Header />
      <Hero />
      <CreatorsGrid creators={creators} categories={categories} />
      {/* your votes section near the footer */}
      {selectedCreators?.length > 0 && (
        <div className="flex flex-col gap-2 mt-10 w-fit mx-auto items-center">
          <span>
            You picked
            <span className="text-xl mx-1">{selectedCreators.length}</span>
            creator. Confirm your votes below.
          </span>
          <button
            className="bg-amber-50/0 hover:bg-primary hover:text-neutral w-30"
            onClick={() => navigate("/your-votes")}
          >
            Confirm
          </button>
        </div>
      )}
      <Footer />
      <RenderModal renderModal={renderModal} setRenderModal={setRenderModal} />
    </div>
  );
}
