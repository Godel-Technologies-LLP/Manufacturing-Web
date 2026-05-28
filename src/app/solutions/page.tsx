"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export default function SolutionsPage() {
  const { openModal } = useModal();

  const verticals = [
    {
      icon: Zap,
      label: "AUTOMOTIVE SYSTEMS",
      headline: "Zero-Downtime Press Shops",
      desc: "Synchronizing complex automated stamping presses and robotic weld cells. We predict component fractures and pneumatic micro-stoppages up to 72 hours in advance, keeping the main line moving.",
    },
    {
      icon: ShieldCheck,
      label: "AEROSPACE COMPOSITES",
      headline: "Sub-Millimeter Quality Assurance",
      desc: "Deploying high-frequency acoustic wave monitoring and computer vision agents directly at lay-up cells. Instantly classifies fiber alignment anomalies and microscopic void pockets.",
    },
    {
      icon: Layers,
      label: "HIGH-TECH ELECTRONICS",
      headline: "Precision Assembly Orchestration",
      desc: "Dynamic flow agents coordinate micro-component pick-and-place lines. Automatically adjusts speed controls and camera trigger sequences to combat thermal warping deviations in real-time.",
    },
    {
      icon: Sparkles,
      label: "HEAVY INDUSTRIAL MACHINERY",
      headline: "Predictive Gear Diagnostics",
      desc: "Translating vibration spectrum coordinates from heavy gear systems, wind tunnels, or casting furnaces into real-time risk scores. Direct edge PLC injection cuts emergency halts by 45%.",
    },
  ];

  return (
    <div className="bg-white min-h-[80vh] flex flex-col justify-center py-20 px-6 md:px-16">
      <div className="layout-container">
        
        {/* Breadcrumb / Meta tag */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase font-semibold tracking-meta text-mutedlabel block mb-6"
        >
          Industrial Segments
        </motion.span>

        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-nearblack tracking-tight leading-[1.05] mb-6"
          >
            architectures built for <span className="text-deemphasized font-normal">precision</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-bodytext text-lg md:text-xl leading-relaxed tracking-tight"
          >
            Every shop floor has unique physics, cycle times, and brownfield controllers. Our systems are engineered to resolve specific bottlenecks across high-value sectors.
          </motion.p>
        </div>

        {/* Vertical Previews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {verticals.map((vert, idx) => {
            const IconComponent = vert.icon;
            return (
              <motion.div
                key={vert.label}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="p-8 border border-wireframe/80 hover:border-nearblack rounded-2xl flex flex-col justify-between group transition-all duration-300 relative bg-neutral-50/20"
              >
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-neutral-100 group-hover:bg-nearblack group-hover:text-white rounded-lg transition-colors duration-300">
                      <IconComponent className="w-4 h-4 text-nearblack group-hover:text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-meta text-mutedlabel uppercase">
                      {vert.label}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-nearblack tracking-tight group-hover:text-nearblack mb-3">
                    {vert.headline}
                  </h3>
                  <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight">
                    {vert.desc}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-wireframe/40 flex items-center justify-between text-xs font-semibold text-mutedlabel group-hover:text-nearblack transition-colors uppercase tracking-wider">
                  <span>Architecture Config 4.1</span>
                  <span>Active Deployment</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full p-8 md:p-12 bg-neutral-50 rounded-3xl border border-wireframe flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-nearblack tracking-tight mb-2">
              Looking for a custom edge blueprint?
            </h3>
            <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight">
              We design proof-of-concept setups tailormade for complex network environments. Consult with our technical engineers to design your roadmap.
            </p>
          </div>
          <button
            onClick={openModal}
            className="whitespace-nowrap px-8 py-3 bg-nearblack hover:bg-nearblack/90 text-white rounded-full text-sm font-semibold tracking-tight shadow-md transition-all hover:scale-105"
          >
            Partner with Us
          </button>
        </motion.div>

      </div>
    </div>
  );
}
