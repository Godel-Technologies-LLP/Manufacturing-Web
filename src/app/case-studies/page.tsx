"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export default function CaseStudiesPage() {
  const { openModal } = useModal();

  const caseStudies = [
    {
      metric: "-38%",
      metricLabel: "MICRO-STOPPAGES",
      sector: "AUTOMOTIVE ASSEMBLY",
      title: "Optimizing Weld-Cell Flow for a Global Tier-1 supplier",
      challenge: "High mechanical vibration cycles causing frequent micro-stops inside custom welding cells. Unscheduled halts accounted for $420k in quarterly capacity losses.",
      result: "We deployed Godel Edge Nodes directly at the PLC clusters, predicting cylinder seals friction wear and scheduling maintenance in active shift change intervals.",
    },
    {
      metric: "99.8%",
      metricLabel: "FIRST-PASS YIELD",
      sector: "PRECISION MICRO-ELECTRONICS",
      title: "Real-time edge inspection at sub-2ms line speeds",
      challenge: "High surface-mount technology (SMT) reject rates due to thermal warping and minute solder inaccuracies during extreme peak line hours.",
      result: "Godel's Vision QA System was deployed directly on-camera, running ultra-fast deep classification locally. Instantly stops micro-errors before board baking.",
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
          Proven Benchmarks
        </motion.span>

        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-nearblack tracking-tight leading-[1.05] mb-6"
          >
            real impact. <span className="text-deemphasized font-normal">quantified</span> operational returns.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-bodytext text-lg md:text-xl leading-relaxed tracking-tight"
          >
            We don&apos;t just build theoretical AI. Our algorithms operate inside production lines, converting real telemetry cycles into immediate physical efficiency.
          </motion.p>
        </div>

        {/* Case Studies Vertical list */}
        <div className="flex flex-col gap-16 mb-24">
          {caseStudies.map((cs, idx) => {
            return (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12 border border-wireframe rounded-3xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all bg-white"
              >
                
                {/* Metric Column */}
                <div className="lg:border-r border-wireframe/40 flex flex-col justify-center pr-4">
                  <span className="text-7xl md:text-8xl font-black text-nearblack tracking-tighter leading-none">
                    {cs.metric}
                  </span>
                  <span className="text-xs font-bold tracking-meta text-mutedlabel uppercase mt-3 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-nearblack" />
                    {cs.metricLabel}
                  </span>
                  <span className="text-[10px] font-mono text-mutedlabel uppercase mt-6 tracking-wider">
                    {cs.sector}
                  </span>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-nearblack tracking-tight mb-6">
                      {cs.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                      <div>
                        <h4 className="text-xs font-semibold text-mutedlabel uppercase tracking-wider mb-2">The Bottleneck</h4>
                        <p className="text-bodytext/80 leading-relaxed tracking-tight">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-mutedlabel uppercase tracking-wider mb-2">The AI Deployment</h4>
                        <p className="text-bodytext/80 leading-relaxed tracking-tight">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-wireframe/40 flex items-center justify-between text-xs font-semibold text-mutedlabel hover:text-nearblack transition-colors uppercase tracking-wider cursor-pointer">
                    <span>Read Full Systems Architecture Report</span>
                    <span className="flex items-center gap-1">
                      PDF Coming Soon
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
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
              Ready to quantify your potential ROI?
            </h3>
            <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight">
              Let our system architects review your shop-floor capacity parameters and design an operations return projection.
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
