"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, CalendarBlank, User, Tooth, ArrowRight, ArrowLeft } from "@phosphor-icons/react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    { id: "checkup", name: "General Checkup", icon: Tooth },
    { id: "whitening", name: "Teeth Whitening", icon: Tooth },
    { id: "implants", name: "Dental Implants", icon: Tooth },
    { id: "consultation", name: "Specialist Consultation", icon: Tooth },
  ];

  const nextStep = () => setStep((s) => Math.min(4, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedService("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed inset-x-4 top-[10%] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[520px] bg-white rounded-3xl shadow-2xl z-[101]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <h2 className="text-2xl font-serif text-zinc-900">
                {step === 4 ? "Confirmed!" : "Book Appointment"}
              </h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Progress */}
            {step < 4 && (
              <div className="flex gap-2 p-6 pb-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-primary" : "bg-zinc-100"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Body */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-medium text-zinc-900 mb-4">What do you need help with?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => {
                        const Icon = service.icon;
                        const isSelected = selectedService === service.id;
                        return (
                          <button
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`p-3 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
                              isSelected
                                ? "border-primary bg-primary/5"
                                : "border-zinc-100 hover:border-primary/30 bg-white hover:bg-zinc-50"
                            }`}
                          >
                            <div className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${isSelected ? "bg-primary text-white" : "bg-zinc-100 text-zinc-500"}`}>
                               <Icon size={18} weight={isSelected ? "fill" : "regular"} />
                            </div>
                            <span className="font-medium text-zinc-900 text-sm">{service.name}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={nextStep}
                        disabled={!selectedService}
                        className="bg-primary text-white px-8 py-3 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:bg-primary-hover transition-colors"
                      >
                        Continue <ArrowRight />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-medium text-zinc-900 mb-4">Select a Date & Time</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Preferred Date</label>
                        <div className="relative">
                           <CalendarBlank className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                           <input type="date" className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-zinc-50" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Preferred Time</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-zinc-50 appearance-none">
                          <option value="">Select a time slot</option>
                          <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                          <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button onClick={prevStep} className="text-zinc-500 hover:text-zinc-900 font-medium px-4 py-3 rounded-full hover:bg-zinc-100 flex items-center gap-2 transition-colors">
                        <ArrowLeft /> Back
                      </button>
                      <button onClick={nextStep} className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-hover flex items-center gap-2 transition-colors">
                        Continue <ArrowRight />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-medium text-zinc-900 mb-4">Your Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                        <div className="relative">
                           <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                           <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-zinc-50" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Phone Number</label>
                        <input type="tel" placeholder="+94 7X XXX XXXX" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-zinc-50" />
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button onClick={prevStep} className="text-zinc-500 hover:text-zinc-900 font-medium px-4 py-3 rounded-full hover:bg-zinc-100 flex items-center gap-2 transition-colors">
                        <ArrowLeft /> Back
                      </button>
                      <button onClick={nextStep} className="bg-zinc-900 text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 flex items-center gap-2 shadow-lg transition-colors">
                        Confirm Booking
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={48} weight="fill" />
                    </div>
                    <h3 className="text-2xl font-serif text-zinc-900 mb-3">Request Received!</h3>
                    <p className="text-zinc-600 mb-8 max-w-sm">
                      Thank you for choosing Zenith Dentistry. Our team will contact you shortly to confirm your exact appointment time.
                    </p>
                    <button onClick={handleClose} className="bg-zinc-100 text-zinc-900 px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
