"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, RotateCcw, AlertTriangle, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function FactorySimulation() {
  const [qaStatus, setQaStatus] = useState<"scanning" | "passed" | "alert">("scanning");
  const [throughput, setThroughput] = useState(144);
  const [errorRate, setErrorRate] = useState(0.02);

  // Simulate real-time sensor updates on the dashboard
  useEffect(() => {
    const statusCycle = setInterval(() => {
      setQaStatus("scanning");
      setTimeout(() => {
        const rand = Math.random();
        if (rand > 0.92) {
          setQaStatus("alert");
          setErrorRate((prev) => Math.min(prev + 0.01, 0.08));
        } else {
          setQaStatus("passed");
          setThroughput((prev) => prev + 1);
          setErrorRate((prev) => Math.max(prev - 0.002, 0.005));
        }
      }, 2000);
    }, 4500);

    return () => clearInterval(statusCycle);
  }, []);

  return (
    <div className="w-full p-8 md:p-12 border border-wireframe rounded-3xl bg-gradient-to-br from-white via-neutral-50/30 to-white overflow-hidden relative shadow-sm">
      
      {/* Dynamic CSS styles for animations inside factory simulation */}
      <style jsx global>{`
        @keyframes gear-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes conveyor-dash {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -40; }
        }
        @keyframes arm-pivot {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-22deg); }
        }
        @keyframes forearm-pivot {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(18deg); }
        }
        @keyframes claw-grip {
          0%, 100% { transform: rotate(0deg) translate(0, 0); }
          50% { transform: rotate(-8deg) translate(-2px, 1px); }
        }
        @keyframes laser-vertical {
          0%, 100% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(60px); opacity: 0.9; }
        }
        @keyframes float-packet {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translate(120px, -60px); opacity: 0; }
        }
        @keyframes pulse-dot {
          0% { r: 2px; opacity: 1; }
          100% { r: 12px; opacity: 0; }
        }
        .anim-gear {
          transform-origin: center;
          animation: gear-spin 8s linear infinite;
        }
        .anim-gear-reverse {
          transform-origin: center;
          animation: gear-spin 6s linear infinite reverse;
        }
        .anim-conveyor-belt {
          stroke-dasharray: 8, 4;
          animation: conveyor-dash 1.2s linear infinite;
        }
        .anim-arm-base {
          transform-origin: 110px 180px;
          animation: arm-pivot 6s ease-in-out infinite;
        }
        .anim-forearm {
          transform-origin: 190px 100px;
          animation: forearm-pivot 6s ease-in-out infinite;
        }
        .anim-claw-left {
          transform-origin: 260px 80px;
          animation: claw-grip 6s ease-in-out infinite;
        }
        .anim-laser {
          animation: laser-vertical 2.5s ease-in-out infinite;
        }
        .anim-packet-1 {
          animation: float-packet 4s ease-in-out infinite;
        }
        .anim-packet-2 {
          animation: float-packet 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      {/* Blueprint background grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.25] pointer-events-none" />

      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 z-10 relative">
        <div>
          <span className="text-[10px] font-mono tracking-wider text-mutedlabel uppercase block mb-1">
            Simulation Sandbox
          </span>
          <h3 className="text-xl font-bold text-nearblack tracking-tight">
            Godel Edge-Co-Pilot Floor Loop
          </h3>
        </div>

        {/* Live Simulation Stats Panel */}
        <div className="flex items-center gap-6 px-4 py-2 border border-wireframe bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.01)] text-xs font-mono">
          <div className="flex flex-col">
            <span className="text-[9px] text-mutedlabel uppercase">OEE Rate</span>
            <span className="font-bold text-nearblack">92.4%</span>
          </div>
          <div className="w-px h-6 bg-wireframe" />
          <div className="flex flex-col">
            <span className="text-[9px] text-mutedlabel uppercase">Throughput</span>
            <span className="font-bold text-nearblack">{throughput} pcs/hr</span>
          </div>
          <div className="w-px h-6 bg-wireframe" />
          <div className="flex flex-col">
            <span className="text-[9px] text-mutedlabel uppercase">Anomaly Rate</span>
            <span className="font-bold text-nearblack">{(errorRate * 100).toFixed(2)}%</span>
          </div>
        </div>
      </div>

      {/* Outer Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 relative">
        
        {/* Left: SVG Canvas Illustration (7 Cols) */}
        <div className="lg:col-span-8 bg-white border border-wireframe/60 rounded-2xl p-4 flex items-center justify-center shadow-inner relative select-none">
          
          <svg
            viewBox="0 0 600 300"
            className="w-full h-auto max-h-[350px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Factory floor silhouette / depth backdrop */}
            <path d="M 0 250 L 600 250 M 50 250 L 50 150 L 80 150 L 80 250 M 520 250 L 520 180 L 550 180 L 550 250" stroke="#E5E5E5" strokeWidth="2" strokeDasharray="4,4" fill="none" />

            {/* 2. Conveyor Belt Setup */}
            {/* Pillars */}
            <rect x="120" y="210" width="16" height="40" fill="#E5E5E5" stroke="#D4D4D4" strokeWidth="1" />
            <rect x="280" y="210" width="16" height="40" fill="#E5E5E5" stroke="#D4D4D4" strokeWidth="1" />
            <rect x="440" y="210" width="16" height="40" fill="#E5E5E5" stroke="#D4D4D4" strokeWidth="1" />

            {/* Conveyor rollers (Spinning Gears) */}
            <circle cx="150" cy="225" r="14" fill="#F5F5F5" stroke="#D4D4D4" strokeWidth="1.5" className="anim-gear" />
            <circle cx="150" cy="225" r="4" fill="#9A9A9A" />
            <circle cx="300" cy="225" r="14" fill="#F5F5F5" stroke="#D4D4D4" strokeWidth="1.5" className="anim-gear" />
            <circle cx="300" cy="225" r="4" fill="#9A9A9A" />
            <circle cx="450" cy="225" r="14" fill="#F5F5F5" stroke="#D4D4D4" strokeWidth="1.5" className="anim-gear" />
            <circle cx="450" cy="225" r="4" fill="#9A9A9A" />

            {/* Main belt bed */}
            <rect x="100" y="200" width="400" height="15" rx="7.5" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
            
            {/* Belt pattern dashed line */}
            <line x1="110" y1="207.5" x2="490" y2="207.5" stroke="#0A0A0A" strokeWidth="2" className="anim-conveyor-belt" />

            {/* 3. Items on Conveyor Belt */}
            {/* Box 1 (Left, entering) */}
            <g transform="translate(140, 160)">
              <rect x="0" y="0" width="40" height="40" rx="4" fill="#FFFFFF" stroke="#D4D4D4" strokeWidth="1.5" />
              <line x1="8" y1="12" x2="32" y2="12" stroke="#E5E5E5" strokeWidth="2" />
              <line x1="8" y1="20" x2="24" y2="20" stroke="#E5E5E5" strokeWidth="2" />
            </g>

            {/* Box 2 (Center, under laser scanner) */}
            <g transform="translate(280, 160)">
              <rect x="0" y="0" width="40" height="40" rx="4" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
              
              {/* Internal microcircuit diagram representation */}
              <circle cx="12" cy="15" r="2.5" fill="#0A0A0A" />
              <circle cx="28" cy="25" r="2.5" fill="#0A0A0A" />
              <path d="M 12 15 L 20 20 L 28 25" stroke="#0A0A0A" strokeWidth="1.5" fill="none" />
            </g>

            {/* Box 3 (Right, leaving) */}
            <g transform="translate(420, 160)">
              <rect x="0" y="0" width="40" height="40" rx="4" fill="#FFFFFF" stroke="#D4D4D4" strokeWidth="1.5" />
              <path d="M 14 20 L 18 24 L 26 16" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            {/* 4. Automated Laser Quality Inspector */}
            {/* Frame structure holding laser */}
            <path d="M 270 200 L 270 90 L 330 90 L 330 200" stroke="#D4D4D4" strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
            <rect x="285" y="80" width="30" height="20" rx="2" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" />
            
            {/* Laser sweeping beam */}
            <g transform="translate(285, 100)">
              {/* Sweeping laser emitter light polygon */}
              <polygon points="15,0 0,78 30,78" fill={
                qaStatus === "passed" ? "rgba(16,185,129,0.08)" : 
                qaStatus === "alert" ? "rgba(239,68,68,0.08)" : 
                "rgba(10,10,10,0.04)"
              } />
              
              {/* Horizontal Neon Laser line */}
              <line x1="-10" y1="35" x2="40" y2="35" stroke={
                qaStatus === "passed" ? "#10b981" : 
                qaStatus === "alert" ? "#ef4444" : 
                "#0A0A0A"
              } strokeWidth="2.5" className="anim-laser" />
            </g>

            {/* 5. Robotic Pick & Place Arm (CSS joint-pivot animations) */}
            <g className="anim-arm-base">
              {/* Base Mount */}
              <rect x="90" y="170" width="40" height="20" rx="2" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
              <circle cx="110" cy="180" r="6" fill="#0A0A0A" />

              {/* Main Arm segment (lever) */}
              <g className="anim-forearm">
                <line x1="110" y1="180" x2="190" y2="100" stroke="#0A0A0A" strokeWidth="5" strokeLinecap="round" />
                <circle cx="190" cy="100" r="5" fill="#0A0A0A" />

                {/* Forearm segment */}
                <line x1="190" y1="100" x2="260" y2="80" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
                <circle cx="260" cy="80" r="4" fill="#0A0A0A" />

                {/* Gripper Claw / Tool Head */}
                <g className="anim-claw-left">
                  <path d="M 260 80 L 260 110" stroke="#0A0A0A" strokeWidth="2" />
                  {/* Left claw finger */}
                  <path d="M 255 110 L 255 118 L 260 120" stroke="#0A0A0A" strokeWidth="1.5" fill="none" />
                  {/* Right claw finger */}
                  <path d="M 265 110 L 265 118 L 260 120" stroke="#0A0A0A" strokeWidth="1.5" fill="none" />
                </g>
              </g>
            </g>

            {/* 6. Floating Edge Data Packets (Robotic and Laser interaction signals) */}
            {/* Packet 1 (From arm core upward) */}
            <g transform="translate(190, 80)" className="anim-packet-1">
              <circle cx="0" cy="0" r="4" fill="#0A0A0A" />
              <path d="M -8 -8 L 8 8" stroke="#D4D4D4" strokeWidth="0.5" />
            </g>

            {/* Packet 2 (From laser QA core upward) */}
            <g transform="translate(300, 90)" className="anim-packet-2">
              <rect x="-3" y="-3" width="6" height="6" fill="#0A0A0A" />
            </g>

          </svg>

          {/* Indicator Light representation overlay */}
          <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 border border-wireframe bg-white rounded-lg shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                qaStatus === "passed" ? "bg-emerald-400" :
                qaStatus === "alert" ? "bg-red-400" :
                "bg-neutral-400"
              }`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                qaStatus === "passed" ? "bg-emerald-500" :
                qaStatus === "alert" ? "bg-red-500" :
                "bg-nearblack"
              }`} />
            </span>
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-mutedlabel">
              QA STATUS: {qaStatus}
            </span>
          </div>

        </div>

        {/* Right: Simulation Dashboard & Insights (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
          
          {/* Card 1: QA Scanner Feed */}
          <div className="p-6 border border-wireframe rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.015)] relative overflow-hidden flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-mutedlabel" />
              <span className="text-[10px] font-mono tracking-wider uppercase text-mutedlabel">
                Edge Copilot Diagnostics
              </span>
            </div>

            <AnimatePresence mode="wait">
              {qaStatus === "scanning" && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-1.5"
                >
                  <h4 className="font-bold text-nearblack tracking-tight text-base flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
                    Scanning Board_v2.01...
                  </h4>
                  <p className="text-xs text-bodytext/70 leading-relaxed tracking-tight">
                    Edge vision classifier compiling surface pixel coordinates locally. Analysing circuit layout deviations.
                  </p>
                </motion.div>
              )}
              {qaStatus === "passed" && (
                <motion.div
                  key="passed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-1.5"
                >
                  <h4 className="font-bold text-emerald-600 tracking-tight text-base flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Board QA Passed
                  </h4>
                  <p className="text-xs text-bodytext/70 leading-relaxed tracking-tight">
                    Solder profile within 0.02mm confidence margins. Metric logged to local SCADA database under 1.4ms.
                  </p>
                </motion.div>
              )}
              {qaStatus === "alert" && (
                <motion.div
                  key="alert"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-1.5"
                >
                  <h4 className="font-bold text-red-500 tracking-tight text-base flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    Dimensional Anomaly Detect
                  </h4>
                  <p className="text-xs text-bodytext/70 leading-relaxed tracking-tight">
                    Micro-fracture detected in component C24. Auto-warning logged to conveyor driver; isolating part.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-4 border-t border-wireframe/40 flex items-center justify-between text-[10px] font-mono text-mutedlabel uppercase">
              <span>LATENCY: 1.18ms</span>
              <span className="flex items-center gap-0.5">
                <RotateCcw className="w-3 h-3 animate-spin" />
                Live Feed
              </span>
            </div>
          </div>

          {/* Card 2: Interactive value proposition */}
          <div className="p-6 border border-wireframe rounded-2xl bg-nearblack text-white shadow-xl relative overflow-hidden flex flex-col gap-4">
            
            {/* Tech bracket accents representing CAD drafts */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20" />

            <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase">
              OEE Orchestration Engine
            </span>

            <h4 className="font-bold text-white text-base tracking-tight leading-tight">
              Bridging cyber-intelligence with physical kinematics.
            </h4>

            <p className="text-white/70 text-xs leading-relaxed tracking-tight">
              Godel Edge algorithms continuously adjust speed, cycle triggers, and alignment schedules. Operational intelligence translated immediately into mechanical optimization.
            </p>

            <a 
              href="/products" 
              className="text-[10px] font-bold tracking-meta uppercase text-white hover:text-white/80 transition-colors flex items-center gap-1 mt-1 w-fit"
            >
              Examine kinematics stack
              <ArrowUpRight className="w-3 h-3 text-white/70" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
