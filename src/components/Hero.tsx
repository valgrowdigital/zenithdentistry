"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Zenith Dentistry Interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 tracking-wide uppercase">
            Premium Dental Care in Dehiwala
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 leading-tight mb-8">
            Exceptional dental care for every stage <br className="hidden md:block" />
            <span className="text-primary italic font-light">of your journey</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Experience a spa-like, calming environment where advanced dentistry meets absolute comfort. 
            Your smile deserves the grandest treatment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Book Your Visit <ArrowRight weight="bold" />
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-800 rounded-full font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center"
            >
              Explore Treatments
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
