import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative top-22 min-h-screen text-2xl text-center justify-center gap-20">
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-semibold sm:max-w-100 md:max-w-200 max-w-70 mx-auto slide-from-top duration-1000">
          Machakos University creators awards are here!
        </p>
        <div className="flex w-fit mx-auto gap-2 font-bold text-primary text-2xl md:text-4xl lg:text-6xl slide-from-top duration-1000 delay-200">
          <span>Vote for your favorite</span>
          <span>
            <ReactTyped
              strings={[
                "dancer",
                "influencer",
                "vlogger",
                "musician",
                "comedian",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-secondary"
            />
          </span>
        </div>
        <p className="text-xs sm:text-lg leading-5 max-w-100 mx-auto slide-from-top duration-1000 delay-300">
          Cast your vote now
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
        <div className="mt-4 flex gap-4 mx-auto w-fit text-sm dark:text-zinc-300 text-zinc-700/90">
          <span className="">Are you a Creator ?</span>
          <span
            className="hover:text-secondary underline cursor-pointer transition-colors"
            onClick={() => {
              navigate("/join");
            }}
          >
            Join now
          </span>
        </div>
      </div>
    </div>
  );
}
