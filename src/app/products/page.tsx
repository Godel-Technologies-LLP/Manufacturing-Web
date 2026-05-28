"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ArrowUpRight, Cpu, Network, BarChart3, Database } from "lucide-react";

export default function ProductsPage() {
  const { openModal } = useModal();

  const previewProducts = [
    {
      icon: Cpu,
      meta: "EDGE HARDWARE LAYER",
      name: "Godel Edge Node v1.4",
      desc: "Industrial-grade physical appliance equipped with hardware-accelerated TPUs. Directly hooks into PLC networks via Modbus, OPC UA, or EtherNet/IP, compiling raw machine telemetry locally with sub-millisecond latency.",
    },
    {
      icon: Network,
      meta: "TELEMETRY SYNC ENGINE",
      name: "Sensor Edge Sync",
      desc: "Real-time anomaly vibration profiles and thermal acoustic telemetry analyzer. Translates complex high-frequency shop-floor wave signals into clean operational metrics directly at the hardware layer.",
    },
    {
      icon: Database,
      meta: "COMPUTER VISION AGENTS",
      name: "Vision QA System",
      desc: "Sleek, high-accuracy vision system deploying custom vision models at the line. Detects micro-fractures, dimensional deviations, and quality anomalies under 2ms per part.",
    },
    {
      icon: BarChart3,
      meta: "ORCHESTRATION LAYER",
      name: "Dynamic Flow Scheduler",
      desc: "Generative AI agent network that continuously orchestrates job order queues, factory floor routing, and material handling allocations dynamically to maximize Overall Equipment Effectiveness (OEE).",
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
          Product Architecture Stack
        </motion.span>

        {/* Hero Section of the page */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-nearblack tracking-tight leading-[1.05] mb-6"
          >
            our strategic <span className="text-deemphasized font-normal">intelligence</span> products.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-bodytext text-lg md:text-xl leading-relaxed tracking-tight"
          >
            We design modular, reliable software-hardware solutions that integrate directly with existing brownfield assets, empowering them with state-of-the-art inference loops.
          </motion.p>
        </div>

        {/* Modular Product Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {previewProducts.map((prod, idx) => {
            const IconComponent = prod.icon;
            return (
              <motion.div
                key={prod.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="p-8 border border-wireframe hover:border-nearblack rounded-2xl flex flex-col justify-between group transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-nearblack group-hover:bg-nearblack group-hover:text-white transition-colors duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)] border border-wireframe/40">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-meta text-mutedlabel uppercase">
                      {prod.meta}
                    </span>
                    <h3 className="text-xl font-bold text-nearblack mt-1 group-hover:text-nearblack transition-colors">
                      {prod.name}
                    </h3>
                  </div>
                  <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight mt-2">
                    {prod.desc}
                  </p>
                </div>
                
                {/* Coming Soon Indicator */}
                <div className="mt-8 pt-6 border-t border-wireframe/40 flex items-center justify-between text-xs font-semibold text-mutedlabel group-hover:text-nearblack transition-colors uppercase tracking-wider">
                  <span>Release Candidate v2.0</span>
                  <span className="flex items-center gap-1">
                    Docs Coming Soon
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full p-8 md:p-12 bg-neutral-50 rounded-3xl border border-wireframe flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-nearblack tracking-tight mb-2">
              Ready to explore legacy integrations?
            </h3>
            <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight">
              Get in touch with our technical systems team to review our hardware requirements and scheduling specs for Siemens or Rockwell automation stacks.
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
