import React from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Contact = () => (
  <div className="px-4 sm:px-8 lg:px-16 py-12 flex flex-col items-center justify-center min-h-[70vh] relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>

    <Reveal>
      <h2 className="text-5xl md:text-6xl font-black text-white mb-6 text-center tracking-tighter">
        Initialize Connection
      </h2>
    </Reveal>
    <Reveal delay={200}>
      <p className="text-gray-400 max-w-2xl text-center mb-16 text-lg font-light">
        Whether discussing digital ASIC design, complex PLC automation, or
        hardware engineering roles, my systems are ready to receive your
        transmission.
      </p>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
      <Reveal delay={400} direction="up">
        <a
          href="mailto:praj3009wal@gmail.com"
          className="flex flex-col items-center p-10 bg-[#0c0c0c] border border-gray-800/80 rounded-sm hover:border-amber-500/60 hover:-translate-y-2 transition-all group shadow-lg"
        >
          <div className="bg-black p-4 rounded-full mb-6 group-hover:bg-amber-500/10 transition-colors">
            <Mail className="w-8 h-8 text-gray-500 group-hover:text-amber-500 transition-colors" />
          </div>
          <span className="text-white font-bold text-xl mb-2 tracking-wide">
            Email
          </span>
          <span className="text-gray-400 font-mono text-sm">
            praj3009wal@gmail.com
          </span>
        </a>
      </Reveal>

      <Reveal delay={550} direction="up">
        <div className="flex flex-col items-center p-10 bg-[#0c0c0c] border border-gray-800/80 rounded-sm hover:border-amber-500/60 hover:-translate-y-2 transition-all group shadow-lg">
          <div className="bg-black p-4 rounded-full mb-6 group-hover:bg-amber-500/10 transition-colors">
            <MapPin className="w-8 h-8 text-gray-500 group-hover:text-amber-500 transition-colors" />
          </div>
          <span className="text-white font-bold text-xl mb-2 tracking-wide">
            Phone
          </span>
          <span className="text-gray-400 font-mono text-sm">
            +91 9483088337
          </span>
        </div>
      </Reveal>

      <Reveal delay={700} direction="up">
        <a
          href="https://linkedin.com/in/prajwal3009/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center p-10 bg-[#0c0c0c] border border-gray-800/80 rounded-sm hover:border-amber-500/60 hover:-translate-y-2 transition-all group shadow-lg"
        >
          <div className="bg-black p-4 rounded-full mb-6 group-hover:bg-amber-500/10 transition-colors">
            <Linkedin className="w-8 h-8 text-gray-500 group-hover:text-amber-500 transition-colors" />
          </div>
          <span className="text-white font-bold text-xl mb-2 tracking-wide">
            LinkedIn
          </span>
          <span className="text-gray-400 font-mono text-sm">
            /in/prajwal3009/
          </span>
        </a>
      </Reveal>

      <Reveal delay={850} direction="up">
        <a
          href="https://github.com/Prajwal1406/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center p-10 bg-[#0c0c0c] border border-gray-800/80 rounded-sm hover:border-amber-500/60 hover:-translate-y-2 transition-all group shadow-lg"
        >
          <div className="bg-black p-4 rounded-full mb-6 group-hover:bg-amber-500/10 transition-colors">
            <Github className="w-8 h-8 text-gray-500 group-hover:text-amber-500 transition-colors" />
          </div>
          <span className="text-white font-bold text-xl mb-2 tracking-wide">
            GitHub
          </span>
          <span className="text-gray-400 font-mono text-sm">/Prajwal1406</span>
        </a>
      </Reveal>
    </div>
  </div>
);
