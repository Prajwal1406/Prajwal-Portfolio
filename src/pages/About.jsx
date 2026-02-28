import { Award } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SKILLS } from "../data/skills";

export const About = () => (
  <div className="px-4 sm:px-8 lg:px-16 py-12 relative">
    <Reveal>
      <h2 className="text-4xl font-black text-white mb-12 flex items-center tracking-tight">
        <span className="w-12 h-[3px] bg-gradient-to-r from-amber-500 to-transparent mr-4"></span>
        Professional Objective
      </h2>
    </Reveal>

    <Reveal delay={200}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent rounded-sm blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
        <div className="relative text-gray-300 text-lg leading-relaxed max-w-5xl mb-16 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 md:p-10 border border-gray-800/80 rounded-sm shadow-2xl hover:border-amber-500/40 transition-colors duration-500">
          <p className="mb-4">
            Currently driving innovation at the intersection of digital hardware
            logic and industrial automation. As an Electrical Engineer at{" "}
            <strong className="text-white">TAIHO SEIKI CO., LTD.</strong> in
            Toyota City, Japan, I am actively involved in the hardware design,
            CAD modeling, and assembly of complex control panels for advanced
            production equipment.
          </p>
          <p>
            I leverage my foundational background in system-on-chip (SoC)
            verification and digital ASIC design to excel in developing C-based
            control software, PLC programming, and executing advanced robot
            teaching workflows. I thrive in global engineering environments,
            combining rigorous analytical problem-solving with cutting-edge
            manufacturing technologies.
          </p>
        </div>
      </div>
    </Reveal>

    <Reveal delay={400}>
      <h2 className="text-4xl font-black text-white mb-12 flex items-center tracking-tight">
        <span className="w-12 h-[3px] bg-gradient-to-r from-amber-500 to-transparent mr-4"></span>
        Technical Skillset
      </h2>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      {SKILLS.map((skill, index) => (
        <Reveal key={index} delay={500 + index * 150}>
          <div className="bg-[#0c0c0c] border border-gray-800/80 p-8 rounded-sm hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.05)] transition-all duration-500 group h-full">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 w-14 h-14 flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 group-hover:border-amber-500/30 transition-all duration-500">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
              {skill.category}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-400 flex items-center text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-sm mr-4 group-hover:bg-amber-500 transition-colors duration-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal delay={1000}>
      <div className="mt-16 bg-[#0c0c0c] border border-gray-800/80 p-8 rounded-sm hover:border-amber-500/30 transition-colors duration-500">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Award className="w-6 h-6 text-amber-500 mr-3" />
          Languages & Global Adaptation
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            {
              lang: "Japanese",
              level: "Intermediate (Completed 470hr Corporate Program)",
            },
            { lang: "English", level: "Fluent / Professional" },
            { lang: "Kannada", level: "Native" },
            { lang: "Telugu", level: "Fluent" },
            { lang: "German", level: "Basics" },
          ].map((l, idx) => (
            <div
              key={idx}
              className="flex flex-col px-5 py-3 bg-black border border-gray-800 rounded-sm hover:border-gray-600 transition-colors"
            >
              <span className="text-gray-200 font-bold text-sm">{l.lang}</span>
              <span className="text-amber-500/70 text-xs font-mono mt-1">
                {l.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </div>
);
