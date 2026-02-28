import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Home = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "Electrical & Control Systems Engineer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[80vh] px-4 sm:px-8 lg:px-16 relative">
      <Reveal delay={300}>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
          Prajwal{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700">
            J P
          </span>
        </h1>
      </Reveal>

      <Reveal delay={500}>
        <h2 className="text-xl sm:text-3xl font-light text-gray-300 mb-8 h-10 font-mono tracking-tight">
          {">"} {typedText}
          <span className="animate-pulse ml-1 text-amber-500 font-black">
            _
          </span>
        </h2>
      </Reveal>

      <Reveal delay={700}>
        <p className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed font-light">
          Bridging the gap between digital logic and physical automation.
          Specializing in advanced control panel design, PLC programming, and
          high-performance digital systems.
        </p>
      </Reveal>

      <Reveal delay={900} direction="up">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/experience")}
            className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-sm transition-all duration-300 flex items-center group shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            Explore My Work
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-transparent border border-gray-700 hover:border-amber-500 text-white rounded-sm transition-all duration-300 hover:bg-white/5"
          >
            Get In Touch
          </button>
        </div>
      </Reveal>
    </div>
  );
};
