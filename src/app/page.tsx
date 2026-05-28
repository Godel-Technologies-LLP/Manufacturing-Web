"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import dynamic from "next/dynamic";

const HeroVisual = dynamic(() => import("@/components/HeroVisual"), { ssr: false });
const FactorySimulation = dynamic(() => import("@/components/FactorySimulation"), { ssr: false });
import { 
  ArrowDown, 
  ArrowUpRight, 
  Settings, 
  Eye, 
  TrendingUp, 
  ChevronDown, 
  Send,
  Terminal,
  Activity
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function Home() {
  const { openModal } = useModal();
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  
  // Custom states for interactive Edge Architecture schematic
  const [selectedNode, setSelectedNode] = useState<number>(1);

  // Form state
  const [inlineForm, setInlineForm] = useState({
    name: "",
    email: "",
    company: "",
    vertical: "predictive-maintenance",
    message: "",
  });
  const [inlineStatus, setInlineStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInlineStatus("submitting");
    setTimeout(() => {
      setInlineStatus("success");
      setInlineForm({
        name: "",
        email: "",
        company: "",
        vertical: "predictive-maintenance",
        message: "",
      });
    }, 1500);
  };

  const handleFAQToggle = (idx: number) => {
    setActiveFAQIndex(activeFAQIndex === idx ? null : idx);
  };

  const products = [
    {
      icon: Settings,
      label: "TELEMETRY SYNCHRONIZER",
      title: "Sensor Edge Sync",
      desc: "Real-time edge telemetry parser that plugs directly into PLC layers. Performs high-frequency vibration diagnostics, thermal profiling, and predictive maintenance analysis under 1ms.",
    },
    {
      icon: Eye,
      label: "COMPUTER VISION CLASSIFIER",
      title: "Vision QA System",
      desc: "Industrial quality-assurance vision engine. Operates at lines speeds over 120 parts/minute, classifying microscopic dimensional defects, surface cracks, and soldering anomalies with 99.98% accuracy.",
    },
    {
      icon: TrendingUp,
      label: "SYSTEMIC AGENT LAYER",
      title: "Dynamic Flow Scheduler",
      desc: "Multi-agent planning system that interfaces with ERP/SCADA nodes to dynamically orchestrate conveyor routes, robotic arm schedules, and active assembly sequences in real-time.",
    },
  ];

  const edgeNodes = [
    {
      id: 1,
      name: "Legacy Machinery (PLC Layer)",
      role: "RAW SENSOR telemetry",
      description: "Direct listener interfaces hook into Siemens S7, Rockwell ControlLogix, or Modbus serial links. Ingests raw thermodynamic, acoustic vibration, and mechanical cycle counts at 12,000Hz.",
      color: "bg-neutral-200"
    },
    {
      id: 2,
      name: "Godel Edge Node (v1.4 Appliance)",
      role: "LOCAL INFERENCE RUNTIME",
      description: "An industrial rack-mount appliance equipped with local TPU hardware. Processes raw signal waves, compiles anomalies locally, and outputs lightweight probability coordinates.",
      color: "bg-nearblack text-white"
    },
    {
      id: 3,
      name: "Generative SCADA Dashboard",
      role: "SYSTEMIC EXECUTIVE CONTROL",
      description: "Real-time dashboard outputs actionable alerts (e.g. 'Seal deterioration in Weld Cell 4. Swap scheduled at next shift change') directly into operator SCADA panels, preventing emergency halts.",
      color: "bg-neutral-100"
    }
  ];

  const caseStudies = [
    {
      metric: "-38%",
      label: "MICRO-STOPPAGES REDUCED",
      sector: "AUTOMOTIVE MANUFACTURING",
      headline: "Predictive press diagnostics for a Tier-1 stamping line",
      summary: "High pneumatic vibration cycles caused frequent micro-halts in critical robotic cells, amounting to $420,000 in monthly capacity losses. Godel mapped raw sensor waves onto edge nodes, predicting mechanical seal failures 72 hours prior.",
    },
    {
      metric: "99.8%",
      label: "FIRST-PASS QA YIELD",
      sector: "SEMICONDUCTOR ASSEMBLY",
      headline: "Microscopic defect QA inspection at sub-2ms line speeds",
      summary: "Peak surface-mount components (SMT) suffered thermal warping deviations. Deploying Godel Vision QA directly on assembly cameras enabled local micro-second image classifications, isolating anomalies before board baking.",
    }
  ];

  const faqs: FAQItem[] = [
    {
      q: "Does Godel require modifying legacy PLC safety logic?",
      a: "No. Our systems are strictly non-intrusive. We tap into existing network switch ports via mirrored streams or OPC UA publish modes. The Godel Edge Node functions entirely as an isolated passive listener, meaning zero functional risk to active automation logic.",
    },
    {
      q: "Where is the machine telemetry stored and processed?",
      a: "Absolutely inside your physical facility bounds. Godel Technologies champions complete data sovereignty. Raw telemetry is processed in real-time on local hardware nodes. Only lightweight performance reports or specific diagnostic signals are transmitted outwards, satisfying strict IT/OT security guidelines.",
    },
    {
      q: "What is the timeline for deployment and initial model learning?",
      a: "Physical installation and network integration require 48 hours. Once plugged in, our models run in passive 'learning' mode for 10-14 days to capture seasonal temperature parameters and mechanical vibration baselines. Operational value begins immediately thereafter.",
    },
    {
      q: "Does it integrate with Siemens, Rockwell, or Fanuc stacks?",
      a: "Yes. Our edge-nodes include built-in drivers for Siemens S7 Comm, Rockwell EtherNet/IP, Modbus TCP, Fanuc FOCAS, MTConnect, and OPC UA. We natively support almost all legacy brownfield architectures.",
    }
  ];

  return (
    <div className="bg-white text-nearblack font-satoshi flex flex-col w-full selection:bg-nearblack selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="layout-container px-6 md:px-16 pt-12 md:pt-20 pb-16 md:pb-24 border-b border-wireframe/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text content */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-xs font-semibold tracking-meta text-mutedlabel uppercase"
            >
              Godel Manufacturing Verticals // RC v2.0
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="text-[44px] sm:text-6xl md:text-[96px] xl:text-[112px] font-extrabold text-nearblack leading-[0.98] tracking-tighter"
            >
              <span className="text-deemphasized font-normal block">your strategic partner for</span>
              AI-driven manufacturing intelligence<span className="text-deemphasized font-normal"> solutions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-bodytext text-lg md:text-xl leading-relaxed font-light tracking-tight max-w-xl"
            >
              Unlocking OEE potential by converting raw shop-floor sensor cycles directly into edge intelligence. Zero-downtime, fully sovereign, brownfield compatible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2"
            >
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-nearblack hover:bg-nearblack/90 text-white rounded-full text-sm font-semibold tracking-tight shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5"
              >
                Schedule Diagnostic Audit
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </button>
              <a 
                href="#products"
                className="w-full sm:w-auto px-8 py-3.5 border border-wireframe hover:border-nearblack text-nearblack rounded-full text-sm font-semibold tracking-tight text-center transition-all duration-200"
              >
                Explore Product Stack
              </a>
            </motion.div>
          </div>

          {/* Right: Three.js Wireframe Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-full"
          >
            <HeroVisual />
          </motion.div>

        </div>

        {/* Operational Metrics Sub-Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-wireframe/40">
          {[
            { metric: "OEE +32%", label: "Average Floor capacity gained" },
            { metric: "Downtime -45%", label: "Reduction in unscheduled halts" },
            { metric: "Throughput +18%", label: "Production yield optimization" },
          ].map((item, idx) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="flex flex-col gap-1 pl-4 border-l border-wireframe/60"
            >
              <span className="text-2xl md:text-3xl font-black text-nearblack tracking-tighter">
                {item.metric}
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-meta text-mutedlabel">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-16 mt-4 select-none">
          <motion.a
            href="#overview"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-[9px] font-bold tracking-meta uppercase text-mutedlabel">
              SCROLL TO EXPLORE
            </span>
            <div className="w-7 h-7 rounded-full border border-wireframe/60 flex items-center justify-center text-mutedlabel hover:border-nearblack hover:text-nearblack transition-colors">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </motion.a>
        </div>

      </section>

      {/* 2. OVERVIEW/VERTICAL FOCUS SECTION */}
      <section id="overview" className="layout-container px-6 md:px-16 py-24 md:py-36 border-b border-wireframe/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 flex flex-col gap-4 sticky top-28">
            <span className="text-[10px] md:text-xs font-semibold tracking-meta text-mutedlabel uppercase">
              Core Paradigm
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-nearblack tracking-tight leading-none">
              translating physics into precision.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12 text-lg md:text-2xl font-light text-bodytext/90 tracking-tight leading-relaxed">
            <p className="border-l-2 border-nearblack pl-6 md:pl-8 py-2">
              Enterprise manufacturing floor networks generate billions of raw signals every second. Heat parameters inside mold presses, high-frequency acoustic wave oscillations in gear drives, and thermal variations inside solder matrices.
            </p>
            <p className="pl-6 md:pl-8">
              Legacy databases dump 99% of this telemetry to save space, or lack the computational processing capacity to isolate tiny anomalies. We solve this bottleneck natively.
            </p>
            <p className="pl-6 md:pl-8">
              By deploying customized **TPU-accelerated hardware nodes** directly inside private OT switch nodes, Godel translates real-time physics into high-accuracy local operational predictions under 1ms.
            </p>
          </div>

        </div>
      </section>

      {/* 3. PRODUCT STACK GRID */}
      <section id="products" className="layout-container px-6 md:px-16 py-24 md:py-36 border-b border-wireframe/40">
        <div className="flex flex-col gap-12 md:gap-16">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] md:text-xs font-semibold tracking-meta text-mutedlabel uppercase">
                Product Ecosystem
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-nearblack tracking-tight">
                modules for automated intelligence.
              </h2>
            </div>
            <a 
              href="/products"
              className="text-xs uppercase font-bold tracking-meta text-mutedlabel hover:text-nearblack transition-colors flex items-center gap-1 w-fit"
            >
              See Product Spec sheets
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((prod, idx) => {
              const IconComponent = prod.icon;
              return (
                <motion.div
                  key={prod.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-8 border border-wireframe hover:border-nearblack rounded-2xl flex flex-col justify-between group transition-all duration-300 relative bg-white"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-nearblack group-hover:bg-nearblack group-hover:text-white transition-colors duration-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)] border border-wireframe/40">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold tracking-meta text-mutedlabel uppercase">
                        {prod.label}
                      </span>
                      <h3 className="text-xl font-bold text-nearblack mt-1">
                        {prod.title}
                      </h3>
                    </div>
                    <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight mt-2">
                      {prod.desc}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-wireframe/40 flex items-center justify-between text-xs font-semibold text-mutedlabel group-hover:text-nearblack transition-colors uppercase tracking-wider">
                    <span>Active Version 1.4</span>
                    <span className="flex items-center gap-0.5">
                      Spec Sheets
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE EDGE ARCHITECTURE SCHEMATIC */}
      <section className="layout-container px-6 md:px-16 py-24 md:py-36 border-b border-wireframe/40 bg-neutral-50/10">
        <div className="flex flex-col gap-12 md:gap-16">
          
          <div className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-semibold tracking-meta text-mutedlabel uppercase block mb-3">
              Data Orchestration Flow
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-nearblack tracking-tight mb-4">
              how data travels at the edge.
            </h2>
            <p className="text-bodytext text-base md:text-lg leading-relaxed font-light tracking-tight">
              An interactive blueprint demonstrating the absolute non-intrusive flow of shop floor metrics from legacy machines to SCADA dashboards. Click on any block to review technical specifics.
            </p>
          </div>

          {/* Interactive Schematic Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual Blocks */}
            <div className="lg:col-span-7 flex flex-col gap-6 relative">
              {edgeNodes.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    whileHover={{ scale: isSelected ? 1 : 1.01 }}
                    className={`p-6 md:p-8 rounded-2xl border cursor-pointer select-none transition-all duration-200 relative flex items-center justify-between gap-6 ${
                      isSelected
                        ? "bg-nearblack border-nearblack text-white shadow-xl"
                        : "bg-white border-wireframe hover:border-nearblack/60 text-nearblack"
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base ${
                        isSelected ? "bg-white text-nearblack" : "bg-neutral-100 text-nearblack"
                      }`}>
                        0{node.id}
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg tracking-tight ${isSelected ? "text-white" : "text-nearblack"}`}>
                          {node.name}
                        </h4>
                        <span className={`text-[10px] uppercase font-bold tracking-meta ${
                          isSelected ? "text-white/60" : "text-mutedlabel"
                        }`}>
                          {node.role}
                        </span>
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected 
                        ? "border-white/20 bg-white/10 text-white" 
                        : "border-wireframe bg-white text-mutedlabel"
                    }`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSelected ? "rotate-90" : "-rotate-90"}`} />
                    </div>

                    {/* Technical flow visual lines (connecting blocks) */}
                    {node.id < 3 && (
                      <div className="absolute -bottom-6 left-11 w-0.5 h-6 border-l border-dashed border-wireframe hidden lg:block" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Node details viewer with neat animation */}
            <div className="lg:col-span-5 h-[280px] lg:h-[350px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {edgeNodes.map((node) => {
                  if (node.id !== selectedNode) return null;
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="p-8 md:p-10 border border-wireframe rounded-2xl bg-white shadow-sm flex flex-col justify-between h-full relative"
                    >
                      <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-nearblack/20" />
                      <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-nearblack/20" />
                      
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-mutedlabel" />
                          <span className="text-[10px] font-mono tracking-wider text-mutedlabel uppercase">
                            SYSTEM_SPEC_RC0{node.id}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-nearblack tracking-tight leading-tight">
                          {node.name}
                        </h3>
                        <p className="text-bodytext/80 text-sm sm:text-base leading-relaxed tracking-tight">
                          {node.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-4 text-[10px] font-semibold text-mutedlabel uppercase tracking-widest">
                        <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                        <span>Verified Integration</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 4.5 FACTORY SIMULATION SANDBOX */}
      <section className="layout-container px-6 md:px-16 py-24 md:py-36 border-b border-wireframe/40">
        <FactorySimulation />
      </section>

      {/* 5. CASE STUDIES SECTION */}
      <section className="layout-container px-6 md:px-16 py-24 md:py-36 border-b border-wireframe/40">
        <div className="flex flex-col gap-12 md:gap-16">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] md:text-xs font-semibold tracking-meta text-mutedlabel uppercase">
                Proven Benchmarks
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-nearblack tracking-tight">
                operational impact.
              </h2>
            </div>
            <a 
              href="/case-studies"
              className="text-xs uppercase font-bold tracking-meta text-mutedlabel hover:text-nearblack transition-colors flex items-center gap-1 w-fit"
            >
              See all case studies
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Case Studies grid */}
          <div className="flex flex-col gap-12 md:gap-16">
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.metric}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12 border border-wireframe rounded-3xl bg-white hover:shadow-lg transition-all"
              >
                
                {/* Metric */}
                <div className="lg:border-r border-wireframe/40 flex flex-col justify-center pr-4">
                  <span className="text-7xl md:text-8xl font-black text-nearblack tracking-tighter leading-none">
                    {cs.metric}
                  </span>
                  <span className="text-xs font-bold tracking-meta text-mutedlabel uppercase mt-3 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-nearblack" />
                    {cs.label}
                  </span>
                  <span className="text-[9px] font-mono text-mutedlabel uppercase mt-6 tracking-wider">
                    SECTOR // {cs.sector}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-nearblack tracking-tight mb-4">
                      {cs.headline}
                    </h3>
                    <p className="text-bodytext/80 text-sm md:text-base leading-relaxed tracking-tight">
                      {cs.summary}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-wireframe/40 flex items-center justify-between text-xs font-semibold text-mutedlabel hover:text-nearblack transition-colors uppercase tracking-wider cursor-pointer">
                    <span>Download deployment specifications blueprint</span>
                    <span className="flex items-center gap-0.5">
                      Spec Sheet (PDF)
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="layout-container px-6 md:px-16 py-24 md:py-36 border-b border-wireframe/40 bg-neutral-50/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Header left sticky */}
          <div className="lg:col-span-4 flex flex-col gap-4 sticky top-28">
            <span className="text-[10px] md:text-xs font-semibold tracking-meta text-mutedlabel uppercase">
              Technical FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-nearblack tracking-tight">
              addressing systems constraints.
            </h2>
            <p className="text-bodytext/80 text-sm md:text-base leading-relaxed tracking-tight mt-2 max-w-sm">
              Answers to common questions regarding legacy hardware compatibility, data sovereignty, and functional safety constraints.
            </p>
            <a 
              href="/faq"
              className="text-xs uppercase font-bold tracking-meta text-mutedlabel hover:text-nearblack transition-colors flex items-center gap-1 w-fit mt-2"
            >
              See complete Technical FAQ
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* FAQ Accordion list right */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFAQIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-wireframe rounded-xl overflow-hidden bg-white hover:border-nearblack/50 transition-colors"
                >
                  <button
                    onClick={() => handleFAQToggle(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-bold text-nearblack tracking-tight text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-1 text-mutedlabel rounded-full flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-wireframe/30 text-bodytext/80 text-sm sm:text-base leading-relaxed tracking-tight">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. CONTACT AUDIT FORM */}
      <section className="layout-container px-6 md:px-16 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 md:p-16 border border-wireframe rounded-[32px] bg-neutral-50/20 relative overflow-hidden">
          
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-nearblack/20" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-nearblack/20" />

          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-1.5 text-xs text-mutedlabel uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <span>Diagnostic Desk Available</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black text-nearblack tracking-tight leading-tight">
              Request an Intelligence Readiness Audit.
            </h3>
            
            <p className="text-bodytext text-base leading-relaxed tracking-tight">
              Our systems architectures team conducts passive operational audits, identifying OEE bottlenecks, mechanical press anomalies, and edge vision feasibility profiles.
            </p>

            <div className="flex flex-col gap-3 pt-4 border-t border-wireframe/40 text-xs text-mutedlabel uppercase tracking-wider font-semibold">
              <div className="flex gap-4">
                <span className="w-16">AUDIT RATE:</span>
                <span className="text-nearblack">COMPLIMENTARY // ENTERPRISE ONLY</span>
              </div>
              <div className="flex gap-4">
                <span className="w-16">TIMELINE:</span>
                <span className="text-nearblack">RESULTS WITHIN 5 OPERATIONAL DAYS</span>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-wireframe shadow-sm">
            {inlineStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center rounded-full text-emerald-600 mb-2">
                  <CheckCircle2Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-nearblack tracking-tight">
                  Systems Audit Initiated
                </h4>
                <p className="text-bodytext/80 text-sm leading-relaxed max-w-sm">
                  Thank you. An integrations systems lead will reach out to schedule your private OT network evaluation and technical stack scoping within 24 hours.
                </p>
                <button
                  onClick={() => setInlineStatus("idle")}
                  className="mt-6 px-6 py-2.5 bg-nearblack hover:bg-nearblack/90 text-white rounded-full text-sm font-semibold tracking-tight shadow-sm transition-all"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleInlineSubmit} className="flex flex-col gap-4">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inline-name" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                    Full Name
                  </label>
                  <input
                    id="inline-name"
                    type="text"
                    required
                    value={inlineForm.name}
                    onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                    placeholder="Alexander Vance"
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all"
                  />
                </div>

                {/* Email and Company Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inline-email" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                      Business Email
                    </label>
                    <input
                      id="inline-email"
                      type="email"
                      required
                      value={inlineForm.email}
                      onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                      placeholder="a.vance@automotivecorp.com"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inline-company" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                      Company Name
                    </label>
                    <input
                      id="inline-company"
                      type="text"
                      required
                      value={inlineForm.company}
                      onChange={(e) => setInlineForm({ ...inlineForm, company: e.target.value })}
                      placeholder="Automotive Corp"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all"
                    />
                  </div>
                </div>

                {/* Focus Area */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inline-focus" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                    Primary Operational Bottleneck
                  </label>
                  <select
                    id="inline-focus"
                    value={inlineForm.vertical}
                    onChange={(e) => setInlineForm({ ...inlineForm, vertical: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight cursor-pointer appearance-none"
                  >
                    <option value="predictive-maintenance">Predictive Maintenance (PLC Telemetry Diagnostics)</option>
                    <option value="edge-vision">Edge Computer Vision (Surface Defect Inspection QA)</option>
                    <option value="dynamic-flow">Dynamic Flow Orchestration (Line Scheduling Loops)</option>
                    <option value="custom">Whole-Facility Digital Twin Setup</option>
                  </select>
                </div>

                {/* Describe Shop Floor */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="inline-message" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                    Describe your Machinery / PLC Infrastructure
                  </label>
                  <textarea
                    id="inline-message"
                    rows={4}
                    required
                    value={inlineForm.message}
                    onChange={(e) => setInlineForm({ ...inlineForm, message: e.target.value })}
                    placeholder="E.g. Weld cells controlled by Siemens S7-1500 PLCs connected via PROFINET network hubs. Looking to diagnose valve anomalies..."
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={inlineStatus === "submitting"}
                  className="w-full mt-2 py-3.5 bg-nearblack hover:bg-nearblack/90 text-white rounded-lg text-sm font-semibold tracking-tight shadow-sm transition-transform active:scale-[0.99] disabled:opacity-75 flex items-center justify-center gap-2 group"
                >
                  {inlineStatus === "submitting" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Scoping Audit Request
                      <Send className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

// Simple Success SVG helper
function CheckCircle2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
