"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/hero-bg.jpg", alt: "Spa-like waiting lounge", className: "md:col-span-2 h-64 md:h-80" },
  { src: "/gallery-1.jpg", alt: "Modern treatment room", className: "h-64 md:h-80" },
  { src: "/gallery-2.jpg", alt: "Reception area", className: "h-64 md:h-80" },
  { src: "/gallery-3.jpg", alt: "Sterilization & equipment", className: "md:col-span-2 h-64 md:h-80" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-3 block">
            Our Clinic
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">
            A Space Designed for Comfort
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Every detail of our clinic is curated to ensure your visit feels
            less like a dental appointment and more like a retreat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden group relative ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-medium text-sm">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
