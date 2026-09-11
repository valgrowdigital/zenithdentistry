"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);

  return (
    <main className="flex-1">
      <Navbar onBookClick={openBooking} />
      <Hero onBookClick={openBooking} />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://www.zenithdentistry.lk/wp-content/uploads/2023/10/our-doctor.webp"
                  alt="Dr. Ahamed Fouzan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-surface p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-serif text-primary mb-1">15+</p>
                <p className="text-zinc-600 font-medium text-sm">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
                Meet The Founder
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6">
                Dr. Ahamed Fouzan
              </h2>
              <p className="text-lg text-primary mb-6 font-medium">
                BDS, Faculty of Dental Sciences, University of Peradeniya
              </p>
              <div className="space-y-4 text-zinc-600 text-lg leading-relaxed mb-8">
                <p>
                  At Zenith Dentistry, we believe that a visit to the dentist shouldn&apos;t 
                  be an anxiety-inducing experience. We have reimagined dental care by 
                  blending cutting-edge clinical excellence with a calming, spa-like environment.
                </p>
                <p>
                  Our loft-style clinic in Dehiwala is designed to put you completely at ease, 
                  ensuring your journey to a perfect smile is as comfortable as it is rewarding.
                </p>
              </div>
              <button
                onClick={openBooking}
                className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors shadow-md"
              >
                Schedule a Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <Contact onBookClick={openBooking} />
      <Footer onBookClick={openBooking} />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
