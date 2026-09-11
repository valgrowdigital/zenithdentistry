"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

export default function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src="/logo-dark.png"
            alt="Zenith Dentistry"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onBookClick}
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full transition-colors text-sm font-semibold shadow-sm"
          >
            Book Appointment
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-zinc-800 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <List size={28} weight="bold" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <img src="/logo-dark.png" alt="Zenith Dentistry" className="h-10" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-zinc-800 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X size={28} weight="bold" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-zinc-900 py-3 border-b border-zinc-100 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-primary text-white py-4 rounded-2xl text-lg font-semibold shadow-lg"
              >
                Book Appointment
              </button>
              <p className="text-center text-sm text-zinc-500 mt-4">
                +94 11 273 2225
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
