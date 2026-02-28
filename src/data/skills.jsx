import { Settings, Cpu, Code2 } from "lucide-react";

export const SKILLS = [
  {
    category: "Industrial & Control Systems",
    icon: <Settings className="w-5 h-5 text-amber-500" />,
    items: [
      "Control Panel Design",
      "PLC Programming",
      "Robot Teaching",
      "Hardware Assembly",
      "Equipment Setup & Trial",
    ],
  },
  {
    category: "Core VLSI/ASIC",
    icon: <Cpu className="w-5 h-5 text-amber-500" />,
    items: [
      "SoC Validation",
      "RTL Design",
      "Low Power Design",
      "Digital ASIC Design",
      "FPGA Implementation",
    ],
  },
  {
    category: "Programming & CAD",
    icon: <Code2 className="w-5 h-5 text-amber-500" />,
    items: [
      "C/C++ (Control Software)",
      "System Verilog / VHDL",
      "Python & Tcl/Perl",
      "CAD Tools",
      "Wiring Diagram Creation",
    ],
  },
];
