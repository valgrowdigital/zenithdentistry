'use client';

import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { number: '5000+', label: 'Happy Patients' },
    { number: '15+', label: 'Years Experience' },
    { number: '20+', label: 'Treatments' },
    { number: '4.9', label: 'Google Rating' },
  ];

  return (
    <section className="w-full bg-zinc-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="font-serif text-4xl md:text-5xl text-white mb-2">
                {stat.number}
              </div>
              <div className="text-zinc-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
