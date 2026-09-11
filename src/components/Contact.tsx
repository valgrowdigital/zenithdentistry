'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from '@phosphor-icons/react'

export default function Contact({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for Your Best Smile?
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-8">
              Book an appointment with us today and let our expert team take care of your dental health. We offer flexible scheduling to accommodate your busy lifestyle.
            </p>
            
            <button
              onClick={onBookClick}
              className="bg-primary hover:bg-primary-hover text-white font-sans font-semibold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg mb-12"
            >
              Book Appointment
            </button>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-primary">
                  <MapPin size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="font-sans text-gray-600">#55, Hospital Road, Dehiwala, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-primary">
                  <Phone size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="font-sans text-gray-600">+94 11 273 2225</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-primary">
                  <Clock size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="font-sans text-gray-600">Mon-Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[600px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5!2d79.8650!3d6.8550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnMTguMCJOIDc5wrA1MScwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zenith Dentistry Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
