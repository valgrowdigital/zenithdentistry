'use client';

import { motion } from 'framer-motion';
import { Tooth, Sparkle, Wrench, Sun, Smiley, FirstAid, ArrowRight } from '@phosphor-icons/react';

const services = [
  {
    icon: Tooth,
    title: 'General Dentistry',
    description: 'Routine check-ups, cleanings, and preventive care to keep your smile healthy and bright.',
  },
  {
    icon: Sparkle,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and total smile makeovers in a spa-like setting.',
  },
  {
    icon: Wrench,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions to replace missing teeth and restore full function.',
  },
  {
    icon: Sun,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brilliantly white and radiant smile.',
  },
  {
    icon: Smiley,
    title: 'Orthodontics & Invisalign',
    description: 'Straighten your teeth discreetly and comfortably with our advanced orthodontic solutions.',
  },
  {
    icon: FirstAid,
    title: 'Root Canal Treatment',
    description: 'Painless and effective endodontic therapy to save infected teeth and relieve pain.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Treatments
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
            Comprehensive Dental Services
          </h2>
          <p className="text-gray-600 text-lg">
            Experience premium dental care in Dehiwala, Sri Lanka. Our spa-like clinic offers a calming environment where your comfort and oral health are our top priorities.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
            >
              <div className="bg-surface w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} weight="duotone" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors mt-auto">
                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} weight="bold" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
