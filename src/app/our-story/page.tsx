"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { Landmark, Compass, Eye } from "lucide-react";

export default function OurStoryPage() {
  const { openModal } = useModal();

  const values = [
    {
      icon: Compass,
      title: "Mathematical Rigor",
      desc: "We avoid speculative neural networks. Our systems operate on strictly verifiable edge heuristics, guaranteeing predictive accuracy that aligns directly with critical safety bounds.",
    },
    {
      icon: Landmark,
      title: "Hardware Empathy",
      desc: "A software model is only as good as the machine context. We understand mechanical acoustics, hydraulic friction, thermal expansion, and legacy PLC protocols natively.",
    },
    {
      icon: Eye,
      title: "Data Sovereignty",
      desc: "Industrial telemetry belongs strictly to the shop floor. Our systems operate exclusively inside local network clusters, ensuring absolute data security and zero cloud dependency.",
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
          Company Foundations
        </motion.span>

        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-nearblack tracking-tight leading-[1.05] mb-6"
          >
            our story. <span className="text-deemphasized font-normal">engineering</span> the autonomous floor.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-bodytext text-lg md:text-xl leading-relaxed tracking-tight"
          >
            Founded as a specialized vertical of Godel Technologies, we bridge the deep gap between cutting-edge computational intelligence and physical shop floor engineering.
          </motion.p>
        </div>

        {/* Brand Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl font-bold text-nearblack tracking-tight leading-tight">
              Pioneering edge-native industrial intelligence.
            </h3>
            <p className="text-bodytext/80 text-base leading-relaxed tracking-tight">
              In early 2024, our engineers realized that manufacturing telemetry was heavily underutilized. Machine controllers captured thousands of data coordinates per second, only to dump them into legacy databases or lose them entirely.
            </p>
            <p className="text-bodytext/80 text-base leading-relaxed tracking-tight">
              We built Godel Technologies Manufacturing Vertical to provide a reliable, edge-native compute layer. We do not require companies to overhaul their existing hardware stacks. Instead, we transform brownfield setups into intelligent, self-optimizing cells.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 border border-wireframe bg-neutral-50 rounded-3xl relative h-[320px] flex flex-col justify-between"
          >
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-nearblack/20" />
            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-nearblack/20" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-nearblack/20" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-nearblack/20" />
            
            <div className="text-[10px] font-mono text-mutedlabel tracking-wider uppercase">
              Operational Statistics
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-5xl md:text-6xl font-black text-nearblack tracking-tighter">
                4.2B+
              </span>
              <span className="text-xs uppercase font-bold tracking-meta text-mutedlabel">
                Telemetry Cycles Processed Daily
              </span>
            </div>

            <div className="text-xs text-mutedlabel leading-relaxed tracking-tight">
              Deployed across 12 high-performance automotive and electronic production locations globally.
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-nearblack tracking-tight mb-12 text-center lg:text-left">
            Our Core Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="p-6 border border-wireframe/60 rounded-2xl hover:border-nearblack transition-colors"
                >
                  <div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center text-nearblack mb-4 border border-wireframe/40">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-nearblack tracking-tight mb-2">
                    {val.title}
                  </h4>
                  <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full p-8 md:p-12 bg-neutral-50 rounded-3xl border border-wireframe flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-nearblack tracking-tight mb-2">
              Interested in joining our systems team?
            </h3>
            <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight">
              We are constantly seeking physical automation engineers, edge kernel developers, and computer vision architects. Let&apos;s build the future together.
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
