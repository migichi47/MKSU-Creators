import { Header } from "./components/Header";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="text-tertiary">
      <Header />
      <div className="flex flex-col relative top-22 min-h-screen border text-2xl text-center justify-center gap-20">
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold">
            Machakos University creators awards are here!
          </p>
          <p className="text-7xl font-extrabold text-primary">Cast Your Vote</p>
          <p className="text-lg leading-5 max-w-100 mx-auto">
            Celebrate the pinnacle of digital excellence. Honor the creators who
            redefine storytelling, performance, and community in the modern era.
            Your voice decides the elite.
          </p>
        </div>

        <div> 
          <button className="border border-primary/50 text-tertiary px-6 py-2 rounded-full hover:bg-primary/50 transition-colors" onClick={() => navigate("voting")}>
            Vote Now
          </button>
          <div className="mt-4 flex gap-4 mx-auto w-fit">
            <span className="text-lg">Are you a Creator ?</span>
            <span
              className="text-lg hover:text-primary hover:underline cursor-pointer"
              onClick={() => {
                navigate("join-as-creator-one");
              }}
            >
              Join now
            </span>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer">
          <div className="collaborator-logo">
            Sponsored by:
            <img src="images/Migichi.png" alt="" />
          </div>
          <div className="collaborator-info"></div>
          <div className="footer-info">
            <a href="">Send Queries</a>
            <a href="">Contact Sponsors</a>
          </div>
        </div>
        <hr className="footer-hr" />
        <a href="#top">&#8593 Back to top</a>
        <br />
        <footer className="footer-details">
          <p>&copy; 2024 MKSU Creators Awards. All rights reserved.</p>
        </footer>
        <button className="admin-btn" onClick={() => navigate("/admin")}>
          Admin
        </button>
      </div>
    </div>
  );
}
