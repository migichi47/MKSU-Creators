import { CreatorsGrid } from "./components/CreatorsGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="">
      <Header />

      {/* hero section */}
      <div className="flex flex-col relative top-22 min-h-screen text-2xl text-center justify-center gap-20">
        <div className="flex flex-col gap-5">
          <p className="md:text-5xl xs:text-3xl text-2xl font-bold sm:max-w-100 md:max-w-200 max-w-70 mx-auto">
            Machakos University creators awards are here!
          </p>
          <p className=" font-extrabold text-primary text-6xl md:text-8xl">
            Cast Your Vote
          </p>
          <p className="text-sm sm:text-lg leading-5 max-w-100 mx-auto">
            Celebrate the pinnacle of digital excellence. Honor the creators who
            redefine storytelling, performance, and community in the modern era.
            Your voice decides the elite.
          </p>
        </div>

        <div>
          <button
            className="bg-amber-50/0 dark:hover:bg-neutral px-6 py-2 md:text-3xl md:px-10 md:py-4 rounded-full transition-colors"
            onClick={() => {
              document.getElementById("voting-grid").scrollIntoView({
                behavior: "smooth",
              });
            }}
            id="voting-grid"
          >
            Vote Now
          </button>
          <div className="mt-4 flex gap-4 mx-auto w-fit">
            <span className="text-lg">Are you a Creator ?</span>
            <span
              className="text-lg hover:text-secondary underline cursor-pointer transition-colors"
              onClick={() => {
                navigate("join-as-creator-one");
              }}
            >
              Join now
            </span>
          </div>
        </div>
      </div>

      {/* creators grid */}
      <CreatorsGrid />

      {/* footer-section */}
      <Footer />

      {/* confirm votes section */}
      <div className="fixed top-24 flex flex-col gap-2 left-4 bg-neutral/80 backdrop-blur-2xl px-3 py-1 rounded-2xl">
        <span>
          Your pick: <span className="text-2xl font-bold ">2</span>
        </span>
        <button>Confirm</button>
      </div>
    </div>
  );
}
