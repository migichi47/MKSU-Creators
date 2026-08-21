import { CreatorsGrid } from "./components/CreatorsGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CreatorContext } from "../context/ContextProvider";
import { CompleteModal } from "./portals/CompleteModal";

export function HomePage() {
  const { selectedCreators, creators, categories, votingComplete } =
    useContext(CreatorContext);

  console.log(votingComplete);

  const navigate = useNavigate();

  return (
    <div className="">
      <Header />

      {/* hero section */}
      <div className="flex flex-col relative top-22 min-h-screen text-2xl text-center justify-center gap-20">
        <div className="flex flex-col gap-5">
          <p className="md:text-5xl xs:text-3xl text-2xl font-bold sm:max-w-100 md:max-w-200 max-w-70 mx-auto slide-from-top duration-1000">
            Machakos University creators awards are here!
          </p>
          <p className=" font-extrabold text-primary text-6xl md:text-8xl slide-from-top duration-1000 delay-200">
            Cast Your Vote
          </p>
          <p className="text-xs sm:text-lg leading-5 max-w-100 mx-auto slide-from-top duration-1000 delay-300">
            Celebrate the pinnacle of digital excellence. Honor the creators who
            redefine storytelling, performance, and community in the modern era.
            Your voice decides the elite.
          </p>
        </div>

        <div>
          <button
            className="bg-amber-50/0 hover:bg-primary hover:text-neutral dark:hover:text-tertiary dark:hover:bg-neutral px-6 py-2 md:text-3xl md:px-10 md:py-4 rounded-full transition-colors"
            onClick={() => {
              document.getElementById("voting-grid").scrollIntoView({
                behavior: "smooth",
              });
            }}
            id="voting-grid"
          >
            Vote Now
          </button>
          <div className="mt-4 flex gap-4 mx-auto w-fit text-sm text-zinc-300">
            <span className="">Are you a Creator ?</span>
            <span
              className="hover:text-secondary underline cursor-pointer transition-colors"
              onClick={() => {
                navigate("join-as-creator-one");
              }}
            >
              Join now
            </span>
          </div>
        </div>
      </div>

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
      {/* confirm votes section */}
      {selectedCreators?.length > 0 && (
        <div className="fixed sm:top-24 top-0 bg-amber-50/0 z-10 left-50 flex flex-col gap-2 sm:gap-2 sm:left-4 md:left-10 sm:bg-neutral/80 sm:backdrop-blur-2xl p-3 md:p-5 rounded-2xl dark:bg-tertiary/60 ">
          <span>
            Your pick:{" "}
            <span className="text-2xl font-bold ">
              {selectedCreators.length}
            </span>
          </span>
          <button
            className="bg-amber-50/0 hover:bg-primary hover:text-neutral px-2"
            onClick={() => navigate("/your-votes")}
          >
            Confirm
          </button>
        </div>
      )}

      <CompleteModal isOpen={votingComplete} onClose={() => {}}>
        <h2>Modal rendered</h2>
      </CompleteModal>
    </div>
  );
}
