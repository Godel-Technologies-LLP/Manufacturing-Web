"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQPage() {
  const { openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "Do we need to install new sensors or override machine PLCs?",
      a: "No. Our systems are engineered to operate in 'read-only listener' configurations. We interface directly with existing PLC clusters (Siemens S7, Rockwell ControlLogix, Beckhoff, etc.) via network switch port mirrors. We capture high-frequency operational parameters without interrupting active machine logic, maintaining full functional safety compliance.",
    },
    {
      q: "How does the edge deployment handle data security and sovereignty?",
      a: "Our deployments are strictly edge-native. The Godel Edge Node compiles, filters, and runs model inferences locally inside your private industrial control network (OT layer). No machine telemetry leaves the physical boundaries of the facility, ensuring absolute protection against operational leaks and satisfying stringent cybersecurity requirements.",
    },
    {
      q: "What is the typical deployment timeline and OEE ramp-up period?",
      a: "A standard deployment consists of a 2-day physical network mapping session, followed by an edge-node installation. Our predictive maintenance and anomalies models require roughly 10-14 days of active listening to build machine-specific vibration and operational baselines. Standard OEE performance gains (e.g. 30%+ reduction in halts) are typified within 30 days of loop activation.",
    },
    {
      q: "What protocols and connection specs does Godel Edge Node support?",
      a: "We support Modbus TCP, OPC UA, EtherNet/IP, PROFINET, MTConnect, and directly parse raw Siemens S7 Comm payloads. High-frequency analog vibration data is ingested via specialized IO-Link master devices connected directly to our edge-nodes.",
    },
    {
      q: "Does Godel require specialized training for factory operators?",
      a: "No. Our system outputs are injected directly as standard warning alerts inside your existing SCADA or HMI (Human Machine Interface) panels. Operators see simple, actionable alerts (e.g., 'Weld head seal friction exceeding threshold in Cell 3. Swap in active maintenance gap') without needing to learn any new analytics software.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-[80vh] flex flex-col justify-center py-20 px-6 md:px-16">
      <div className="layout-container">
        
        {/* Breadcrumb / Meta tag */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase font-semibold tracking-meta text-mutedlabel block mb-6"
        >
          Systems Specifications
        </motion.span>

        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-nearblack tracking-tight leading-[1.05] mb-6"
          >
            technical faq. <span className="text-deemphasized font-normal">deployment</span> architectures.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-bodytext text-lg md:text-xl leading-relaxed tracking-tight"
          >
            Clear, transparent answers on legacy compatibility, physical network constraints, edge hardware bounds, and security compliance.
          </motion.p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-24">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.08 }}
                className="border border-wireframe/80 rounded-2xl overflow-hidden bg-white hover:border-nearblack/60 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-mutedlabel flex-shrink-0" />
                    <span className="font-bold text-nearblack tracking-tight text-base sm:text-lg">
                      {faq.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-1 text-mutedlabel rounded-full hover:bg-neutral-100 flex-shrink-0"
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
                      <div className="px-6 pb-6 pt-2 border-t border-wireframe/40 text-bodytext/80 text-sm sm:text-base leading-relaxed tracking-tight">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              Have specific OT network requirements?
            </h3>
            <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight">
              Submit your shop-floor network schematic or list of machine controllers to our technical integrations desk for an architecture review.
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
