import { Routes, Route } from "react-router-dom";

// Import Layout Components
import { Navbar } from "./components/Navbar";

// Import Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Education } from "./pages/Education";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Background Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <Navbar />

      {/* Main Content Area handled by Router */}
      <main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-900 py-8 text-center text-gray-600 text-sm mt-auto bg-[#020202]">
        <p className="font-mono">
          © 2026 PRAJWAL J P. SYSTEM ARCHITECTURE & AUTOMATION.
        </p>
      </footer>
    </div>
  );
}
