"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Our Story", href: "/our-story" },
  { name: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-wireframe/40">
      <div className="layout-container px-6 md:px-16 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-nearblack flex items-center justify-center rounded-lg overflow-hidden relative">
            <span className="text-white font-extrabold text-xl tracking-tighter select-none">G</span>
            {/* Minimal aesthetic line inside logo */}
            <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none" />
          </div>
          <span className="font-satoshi font-extrabold text-nearblack text-lg tracking-tight select-none flex items-center gap-1.5">
            Godel <span className="font-light text-mutedlabel">Technologies</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm font-medium tracking-tight text-nearblack/70 hover:text-nearblack transition-colors duration-250 ease-out"
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-nearblack rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={openModal}
            className="px-6 py-2.5 bg-nearblack hover:bg-nearblack/90 text-white rounded-full text-sm font-medium tracking-tight shadow-sm transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 group"
          >
            Partner with Us
            <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-nearblack hover:bg-nearblack/5 rounded-full transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black lg:hidden"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[320px] bg-white p-8 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-nearblack flex items-center justify-center rounded-lg">
                      <span className="text-white font-black text-base">G</span>
                    </div>
                    <span className="font-extrabold text-nearblack text-base tracking-tight">Godel</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-nearblack hover:bg-nearblack/5 rounded-full transition-colors"
                    aria-label="Close Mobile Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg font-medium tracking-tight transition-colors ${
                          isActive
                            ? "text-nearblack pl-3 border-l-2 border-nearblack"
                            : "text-nearblack/60 hover:text-nearblack"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer / CTA */}
              <div className="mt-auto pt-8 border-t border-wireframe/40">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  className="w-full py-3 bg-nearblack hover:bg-nearblack/90 text-white rounded-full text-sm font-semibold tracking-tight shadow-sm transition-transform active:scale-95 flex items-center justify-center gap-1.5"
                >
                  Partner with Us
                  <ArrowUpRight className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
