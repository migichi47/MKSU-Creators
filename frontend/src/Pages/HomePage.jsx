import { CreatorsGrid } from "./components/CreatorsGrid";
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
          <p className=" font-extrabold text-primary text-6xl md:text-8xl">Cast Your Vote</p>
          <p className="text-sm sm:text-lg leading-5 max-w-100 mx-auto">
            Celebrate the pinnacle of digital excellence. Honor the creators who
            redefine storytelling, performance, and community in the modern era.
            Your voice decides the elite.
          </p>
        </div>

        <div>
          <button
            className="bg-amber-50/0 dark:hover:bg-neutral px-6 py-2 md:text-3xl md:px-10 md:py-4 rounded-full transition-colors"
            onClick={() => navigate("voting")}
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
      <div className="border-t border-tertiary/20 text-center pt-4 pb-8 flex flex-col gap-2">
        <div className="text-secondary/60 flex gap-2 mx-auto ">
          <a href="#" className="">
            Privacy Policy
          </a>
          <a href="#" className="">
            Terms of Excellence
          </a>
          <a href="#" className="">
            Sponsors
          </a>
        </div>
        <span className="text-primary/90">&copy;2026 MKSU Creators Awards. All rights reserved</span>
      </div>
    </div>
  );
}
