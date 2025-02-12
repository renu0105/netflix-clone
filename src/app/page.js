import Navbar from "../components/Navbar";
import About from "../components/About";
import Download from "../components/Download";
import Que from "../components/Que";
import Footer from "../components/Footer";
import "../index.css";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      <div
        style={{
          backgroundImage: "url('/bg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "600px",
          zIndex: "-1",
          boxShadow: "inset 0px 0px 900px rgba(0, 0, 0, 0.8)", // ✅ Strong black inner shadow
        }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-4 h-[70%]">
          <h1 className="lg:text-6xl text-4xl font-bold text-center lg:w-[38%] w-[70%]">
            Unlimited movies, TV shows and more
          </h1>
          <p>Starts at ₹149. Cancel at any time.</p>
          <p className="w-[60%] text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="flex flex-row gap-3">
            <input
              type="email"
              placeholder="Email address"
              required
              className="p-3 border-2 w-56 rounded-sm bg-white border-gray-500 text-black"
            />
            <button className="bg-red-600 text-white p-3 font-semibold text-xl rounded w-44">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
      <About />
      <Download />
      <Que />
      <Footer />
    </div>
  );
}

export default Home;
