'use client';

import { MapPin, Phone, Envelope, InstagramLogo, FacebookLogo, WhatsappLogo } from '@phosphor-icons/react';

interface FooterProps {
  onBookClick?: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  return (
    <footer className="bg-zinc-900 text-white w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 */}
          <div className="flex flex-col space-y-4">
            <img 
              src="/logo.png" 
              alt="Zenith Dentistry Logo" 
              className="h-14 object-contain object-left"
            />
            <p className="text-zinc-400 text-sm">
              Providing exceptional dental care with modern technology and a gentle touch. Your smile is our priority.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold font-serif text-white">Quick Links</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li>
                <button onClick={onBookClick} className="hover:text-white transition-colors text-left">
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold font-serif text-white">Treatments</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#general" className="hover:text-white transition-colors">General Dentistry</a></li>
              <li><a href="#cosmetic" className="hover:text-white transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#implants" className="hover:text-white transition-colors">Implants</a></li>
              <li><a href="#whitening" className="hover:text-white transition-colors">Whitening</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold font-serif text-white">Contact</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <span>#55, Hospital Road, Dehiwala, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+94 11 273 2225</span>
              </li>
              <li className="flex items-center space-x-3">
                <Envelope className="w-5 h-5 text-primary" />
                <span>info@zenithdentistry.lk</span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors">
                <InstagramLogo className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FacebookLogo className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors">
                <WhatsappLogo className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-zinc-400">
          <p>© 2024 Zenith Dentistry. All rights reserved.</p>
          <p>Designed with care</p>
        </div>
      </div>
    </footer>
  );
}
