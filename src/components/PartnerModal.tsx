"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { X, Send, CheckCircle2, ChevronRight } from "lucide-react";

export default function PartnerModal() {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    vertical: "predictive-maintenance",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        vertical: "predictive-maintenance",
        message: "",
      });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-wireframe overflow-hidden z-10"
          >
            
            {/* Top Branding Banner */}
            <div className="h-1.5 w-full bg-gradient-to-r from-nearblack via-neutral-600 to-nearblack" />

            {/* Header */}
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-wireframe/40">
              <div>
                <span className="text-[10px] font-bold text-mutedlabel uppercase tracking-widest block mb-1">
                  Godel Technologies
                </span>
                <h3 className="text-xl font-bold text-nearblack tracking-tight">
                  Request Intelligence Audit
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-1.5 text-mutedlabel hover:text-nearblack hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8">
              {status === "success" ? (
                // Success screen
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center rounded-full text-emerald-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-nearblack tracking-tight">
                    Audit Request Received
                  </h4>
                  <p className="text-bodytext/80 text-sm leading-relaxed max-w-sm">
                    Our Manufacturing Systems Architecture team will analyze your request and reach out within 24 hours to schedule a deep-dive diagnostic session.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      closeModal();
                    }}
                    className="mt-6 px-6 py-2.5 bg-nearblack hover:bg-nearblack/90 text-white rounded-full text-sm font-semibold tracking-tight shadow-sm transition-transform active:scale-95 flex items-center gap-1"
                  >
                    Return to Site
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                // Form screen
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-name" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                      Full Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alexander Vance"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all"
                    />
                  </div>

                  {/* Dual Grid: Email and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-email" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                        Business Email
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="a.vance@automotivecorp.com"
                        className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-company" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                        Company Name
                      </label>
                      <input
                        id="modal-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Automotive Corp"
                        className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all"
                      />
                    </div>
                  </div>

                  {/* Dropdown: Focus Area */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-focus" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                      Primary Operational Goal
                    </label>
                    <select
                      id="modal-focus"
                      value={formData.vertical}
                      onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all appearance-none cursor-pointer"
                    >
                      <option value="predictive-maintenance">Predictive Maintenance (PLC telemetry)</option>
                      <option value="edge-vision">Edge Computer Vision QA (Inspection)</option>
                      <option value="dynamic-flow">Dynamic Flow Orchestration (Scheduling)</option>
                      <option value="custom">Whole-Factory Digital Twin Architecture</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-message" className="text-xs font-semibold uppercase tracking-wider text-mutedlabel">
                      Describe your Shop-Floor Stack
                    </label>
                    <textarea
                      id="modal-message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What controllers (Siemens, Rockwell) or machinery constraints are we aiming to optimize?"
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full mt-2 py-3 bg-nearblack hover:bg-nearblack/90 text-white rounded-lg text-sm font-semibold tracking-tight shadow-sm transition-transform active:scale-[0.99] disabled:opacity-75 flex items-center justify-center gap-2 group"
                  >
                    {status === "submitting" ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Request Intelligence Audit
                        <Send className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
