"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-wireframe/60 mt-auto">
      <div className="layout-container px-6 md:px-16 py-16 md:py-24">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-nearblack flex items-center justify-center rounded-lg">
                <span className="text-white font-black text-base select-none">G</span>
              </div>
              <span className="font-extrabold text-nearblack text-lg tracking-tight select-none">
                Godel <span className="font-light text-mutedlabel">Technologies</span>
              </span>
            </div>
            <p className="text-bodytext/80 text-sm leading-relaxed tracking-tight">
              Pioneering edge-intelligence and generative AI agent orchestrations for enterprise industrial operations. Reinventing efficiency from raw sensor telemetry to systemic autonomous flow.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-mutedlabel text-xs uppercase tracking-wider font-semibold">Edge Hub: Operational</span>
            </div>
          </div>

          {/* Column 1: Verticals */}
          <div className="flex flex-col gap-4">
            <h4 className="text-nearblack font-semibold text-sm uppercase tracking-wider">Verticals</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-bodytext/70 hover:text-nearblack transition-colors w-fit font-medium">
                Manufacturing
              </Link>
              <a href="https://godeltech.in" target="_blank" rel="noopener noreferrer" className="text-sm text-bodytext/50 hover:text-nearblack transition-colors w-fit flex items-center gap-0.5">
                Robotics <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a href="https://godeltech.in" target="_blank" rel="noopener noreferrer" className="text-sm text-bodytext/50 hover:text-nearblack transition-colors w-fit flex items-center gap-0.5">
                Supply Chain <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a href="https://godeltech.in" target="_blank" rel="noopener noreferrer" className="text-sm text-bodytext/50 hover:text-nearblack transition-colors w-fit flex items-center gap-0.5">
                Energy <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </nav>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-nearblack font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/products" className="text-sm text-bodytext/70 hover:text-nearblack transition-colors w-fit">
                Product Stack
              </Link>
              <Link href="/solutions" className="text-sm text-bodytext/70 hover:text-nearblack transition-colors w-fit">
                Solutions Specs
              </Link>
              <Link href="/case-studies" className="text-sm text-bodytext/70 hover:text-nearblack transition-colors w-fit">
                Proof Points
              </Link>
              <Link href="/faq" className="text-sm text-bodytext/70 hover:text-nearblack transition-colors w-fit">
                Technical FAQ
              </Link>
            </nav>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-nearblack font-semibold text-sm uppercase tracking-wider">Intelligence Feed</h4>
            <p className="text-bodytext/70 text-xs leading-relaxed tracking-tight">
              Get our monthly analysis on edge-computing benchmarks and industrial AI paradigms.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-wireframe hover:border-mutedlabel focus:border-nearblack focus:bg-white text-sm outline-none rounded-lg tracking-tight transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={subscribed}
                className={`py-2 px-4 rounded-lg text-sm font-semibold tracking-tight transition-all duration-200 ${
                  subscribed
                    ? "bg-emerald-500 text-white flex items-center justify-center gap-1.5"
                    : "bg-nearblack hover:bg-nearblack/90 text-white"
                }`}
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-wireframe/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-mutedlabel font-medium uppercase tracking-wider">
            <span>© {new Date().getFullYear()} Godel Technologies</span>
            <a href="https://godeltech.in" target="_blank" rel="noopener noreferrer" className="hover:text-nearblack transition-colors">
              Primary Site (godeltech.in)
            </a>
            <Link href="/our-story" className="hover:text-nearblack transition-colors">
              Our Story
            </Link>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-mutedlabel uppercase tracking-widest">
            <span className="text-[10px]">VERCEL READY</span>
            <span className="w-1.5 h-1.5 bg-nearblack rounded-full" />
            <span className="text-[10px]">NEXT.JS 14</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
