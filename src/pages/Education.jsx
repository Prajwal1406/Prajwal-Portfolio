import { GraduationCap, Award } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const Education = () => (
  <div className="px-4 sm:px-8 lg:px-16 py-12 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Education Column */}
      <div>
        <Reveal>
          <h2 className="text-3xl font-black text-white mb-12 flex items-center tracking-tight">
            <GraduationCap className="w-8 h-8 text-amber-500 mr-4" />
            Academic Background
          </h2>
        </Reveal>

        <div className="space-y-10 relative border-l-2 border-gray-800/60 ml-4">
          <Reveal delay={200} direction="right">
            <div className="pl-8 relative group">
              <div className="absolute -left-[9px] top-2 w-[16px] h-[16px] bg-[#050505] border-4 border-gray-600 rounded-full group-hover:border-amber-500 transition-colors"></div>
              <h3 className="text-2xl font-bold text-white mb-2">
                B.E. in Electronics & Communication
              </h3>
              <p className="text-amber-500/80 font-mono text-sm mb-3 font-semibold">
                2021 - 2025
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                P.E.S College of Engineering, Mandya
              </p>
              <div className="bg-[#0a0a0a] inline-block px-4 py-2 border border-gray-800 rounded-sm">
                <span className="text-gray-500 text-sm font-mono mr-2">
                  CGPA:
                </span>
                <span className="text-white font-black text-lg">8.9</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400} direction="right">
            <div className="pl-8 relative group">
              <div className="absolute -left-[9px] top-2 w-[16px] h-[16px] bg-[#050505] border-4 border-gray-600 rounded-full group-hover:border-amber-500 transition-colors"></div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Pre-University (PCMB)
              </h3>
              <p className="text-amber-500/80 font-mono text-sm mb-3 font-semibold">
                2019 - 2021
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                Global Mahesh PU College
              </p>
              <div className="bg-[#0a0a0a] inline-block px-4 py-2 border border-gray-800 rounded-sm">
                <span className="text-gray-500 text-sm font-mono mr-2">
                  Percentage:
                </span>
                <span className="text-white font-black text-lg">94%</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Certifications Column */}
      <div>
        <Reveal delay={200}>
          <h2 className="text-3xl font-black text-white mb-12 flex items-center tracking-tight">
            <Award className="w-8 h-8 text-amber-500 mr-4" />
            Specialized Certifications
          </h2>
        </Reveal>

        <div className="space-y-4">
          {[
            { title: "CAN-Based Vehicle Diagnostics Tool", year: "2024" },
            {
              title: "PID Control for All-Wheel Steering Systems",
              year: "2024",
            },
            { title: "Postman API Fundamentals Student Expert", year: "2024" },
          ].map((cert, idx) => (
            <Reveal key={idx} delay={400 + idx * 150} direction="left">
              <div className="bg-[#0c0c0c] border border-gray-800/80 p-6 rounded-sm flex items-center justify-between hover:border-amber-500/40 hover:bg-[#111] transition-all group cursor-default">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-sm mr-6 group-hover:bg-amber-500 group-hover:scale-150 transition-all"></div>
                  <span className="text-gray-200 text-lg font-medium tracking-wide">
                    {cert.title}
                  </span>
                </div>
                <span className="text-gray-600 font-mono text-sm">
                  {cert.year}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </div>
);
