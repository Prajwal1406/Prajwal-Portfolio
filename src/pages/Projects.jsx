import { Code2, ExternalLink } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { PROJECTS } from "../data/Projects";
export const Projects = () => (
  <div className="px-4 sm:px-8 lg:px-16 py-12">
    <Reveal>
      <h2 className="text-4xl font-black text-white mb-16 flex items-center tracking-tight">
        <span className="w-12 h-[3px] bg-gradient-to-r from-amber-500 to-transparent mr-4"></span>
        Core VLSI / ASIC Projects
      </h2>
    </Reveal>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <Reveal
          key={index}
          delay={200 + index * 200}
          className={
            index === 2 ? "lg:col-span-2 lg:w-1/2 lg:justify-self-center" : ""
          }
        >
          <div className="bg-[#0c0c0c] border border-gray-800/80 rounded-sm p-8 md:p-10 h-full flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:border-amber-500/40 transition-all duration-500 relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-800 group-hover:from-amber-500 group-hover:to-amber-700 transition-all duration-700"></div>

            <div className="flex justify-between items-start mb-8">
              <div className="bg-black border border-gray-800 p-3 rounded-sm group-hover:border-amber-500/30 transition-colors">
                <Code2 className="w-8 h-8 text-amber-500 opacity-80" />
              </div>
              <ExternalLink className="w-6 h-6 text-gray-700 group-hover:text-amber-500 transition-colors cursor-pointer" />
            </div>

            <h3 className="text-2xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-amber-500/80 font-mono mb-6 pb-6 border-b border-gray-800/80">
              Focus: {project.focus}
            </p>

            <p className="text-gray-400 leading-relaxed flex-grow mb-8 font-light text-base md:text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-gray-500 bg-black px-3 py-1.5 border border-gray-800 rounded-sm"
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
