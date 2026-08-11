
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function YourVotes({ selectedCreators, setSelectedCreators }) {
  console.log(selectedCreators);

  return (
    <div>
      <Header />

      {selectedCreators.map((creator) => {
        const { name, image, category } = creator;

        return (
          <div
            key={`${name}-${category}`}
            className="relative h-90 min-w-60 rounded-lg"
          >
            <img
              src={image ? image : "default.png"}
              alt="creator image"
              className="rounded-[inherit] min-w-[inherit] h-[inherit]"
            />
            {/* overlay */}
            <div className=" absolute top-0 rounded-[inherit] min-w-[inherit] h-[inherit] bg-linear-to-b from-neutral/0 to-tertiary/90" />

            <div className="absolute flex flex-col gap-4 bottom-3 px-6 rounded-b-2xl w-full text-neutral">
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-4xl">{name}</span>
                <div className="flex gap-3 text-xs text-neutral/80">
                  {category}
                </div>
              </div>
              <button>Remove</button>
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}
