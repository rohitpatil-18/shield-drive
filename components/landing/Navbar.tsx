"use client";

import { Shield, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-700 bg-slate-900/95 shadow-xl backdrop-blur-xl"
          : "bg-slate-900/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg transition duration-300 group-hover:rotate-6">
            <Shield className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              Shield<span className="text-amber-400">Drive</span>
            </h1>

            <p className="-mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Auto Insurance
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">

          <a
            href="#features"
            className="relative font-medium text-slate-300 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Features
          </a>

          <a
            href="#trust"
            className="relative font-medium text-slate-300 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Why Us
          </a>

          <a
            href="#reviews"
            className="relative font-medium text-slate-300 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Reviews
          </a>

          <a
            href="#footer"
            className="relative font-medium text-slate-300 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>

        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#quote-form"
            className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-500/40"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-slate-700 p-2 text-white transition hover:bg-slate-800"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-700 bg-slate-900 lg:hidden">

          <div className="space-y-1 px-6 py-6">

            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Features
            </a>

            <a
              href="#trust"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Why Us
            </a>

            <a
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Reviews
            </a>

            <a
              href="#footer"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Contact
            </a>

            <a
              href="#quote-form"
              onClick={() => setIsOpen(false)}
              className="mt-4 block rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-center font-semibold text-white"
            >
              Free Quote
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}