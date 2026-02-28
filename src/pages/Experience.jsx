import { Briefcase, MapPin } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { EXPERIENCE } from "../data/Experience";

export const Experience = () => (
  <div className="px-4 sm:px-8 lg:px-16 py-12 max-w-5xl">
    <Reveal>
      <h2 className="text-4xl font-black text-white mb-16 flex items-center tracking-tight">
        <span className="w-12 h-[3px] bg-gradient-to-r from-amber-500 to-transparent mr-4"></span>
        Employment & Internships
      </h2>
    </Reveal>

    <div className="relative border-l-2 border-gray-800/60 ml-4 sm:ml-0">
      {EXPERIENCE.map((job, index) => (
        <Reveal key={index} delay={200 + index * 200} direction="right">
          <div className="mb-16 pl-8 sm:pl-12 relative group">
            {/* Timeline Dot with Pulse for Current Job */}
            <div
              className={`absolute -left-[9px] top-2 w-[16px] h-[16px] rounded-full transition-all duration-500 border-4 border-[#050505] 
              ${job.current ? "bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,1)] scale-110" : "bg-gray-700 group-hover:bg-amber-500"}`}
            ></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <h3
                className={`text-3xl font-black ${job.current ? "text-white" : "text-gray-300"}`}
              >
                {job.role}
              </h3>
              <span
                className={`inline-block px-4 py-1 text-sm font-mono border rounded-sm mt-3 sm:mt-0 w-fit
                ${job.current ? "bg-amber-500/10 text-amber-400 border-amber-500/30" : "bg-gray-900 text-gray-400 border-gray-800"}`}
              >
                {job.date}
              </span>
            </div>

            <div className="text-lg text-gray-400 font-medium mb-4 flex items-center flex-wrap gap-y-2 font-mono">
              <Briefcase className="w-4 h-4 mr-2 text-amber-500/70" />
              <span className="text-gray-200">{job.company}</span>
              <span className="mx-4 text-gray-700 hidden sm:inline">|</span>
              <MapPin className="w-4 h-4 mr-2 text-amber-500/70 sm:ml-0 ml-2" />
              <span>{job.location}</span>
            </div>

            <div className="text-gray-400 leading-relaxed mb-6 mt-4 bg-[#0a0a0a] p-6 sm:p-8 border border-gray-800/80 rounded-sm shadow-xl group-hover:border-gray-700 transition-colors relative overflow-hidden">
              {job.current && (
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              )}
              {job.description}
            </div>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono font-semibold tracking-wide text-gray-400 bg-black px-3 py-1.5 border border-gray-800 rounded-sm group-hover:border-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);
