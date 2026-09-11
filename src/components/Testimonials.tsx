'use client';

import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    subtitle: 'Cosmetic Dentistry Patient',
    quote: "I've always been anxious about dental visits, but Zenith Dentistry completely changed that. The calming environment and Dr. Fouzan's gentle approach made my veneer procedure painless and stress-free. I can't stop smiling!",
  },
  {
    name: 'David Reynolds',
    subtitle: 'Implant Patient',
    quote: "The level of professionalism and modern technology at Zenith Dentistry is unmatched. Dr. Fouzan explained every step of my implant procedure clearly. The results are incredible, and I felt completely cared for throughout the entire process.",
  },
  {
    name: 'Emily Chen',
    subtitle: 'Routine Care',
    quote: "From the moment you walk in, you know this isn't an ordinary dental clinic. The beautiful interior, welcoming staff, and thorough care from Dr. Fouzan make every visit a pleasant experience. Highly recommend to anyone looking for premium dental care.",
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-sans font-semibold tracking-wider uppercase text-sm"
          >
            Patient Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mt-4"
          >
            What Our Patients Say
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-surface rounded-3xl p-8 flex flex-col h-full"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} weight="fill" className="text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 font-sans text-lg mb-8 flex-grow italic">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-serif font-medium text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-primary font-sans text-sm">
                  {testimonial.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
