'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const showrooms = [
  {
    name: 'Sanha Fashion — Tirur',
    address: 'Ring Road, Tirur – 676101, Malappuram District, Kerala',
    phone: ['0494 242 3538', '9020 600 400'],
    hours: '10:00 AM – 9:30 PM',
    mapUrl:
      'https://www.google.com/maps/place/Sanha+Fashion/data=!4m2!3m1!1s0x0:0xfe37b869a50834c2',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d75.92!3d10.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe37b869a50834c2!2sSanha%20Fashion!5e0!3m2!1sen!2sin!4v1600000000000',
    primary: true,
  },
  {
    name: 'Sanha Silks — Valanchery',
    address: 'Valanchery Town, Malappuram District, Kerala – 676552',
    phone: ['0494 264 4464', '85899 44464'],
    hours: '10:00 AM – 9:30 PM',
    mapUrl: 'https://maps.google.com/?q=Sanha+Silks+Valanchery',
    embedUrl: '',
    primary: false,
  },
];

export default function Showrooms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="showrooms" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-soft-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-soft-gold" />
            <span className="font-[family-name:var(--font-cormorant)] text-soft-gold text-sm tracking-[0.3em] uppercase">
              Visit Us
            </span>
            <div className="w-12 h-[1px] bg-soft-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal-warm mb-4">
            Our <span className="text-soft-gold italic">Showrooms</span>
          </h2>
          <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 max-w-2xl mx-auto">
            Experience the warmth and grandeur of Sanha Fashion in person.
            Visit our showrooms for a personalized shopping experience.
          </p>
        </motion.div>

        {/* Showroom Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {showrooms.map((showroom, index) => (
            <motion.div
              key={showroom.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`rounded-2xl p-8 border transition-all duration-500 hover:shadow-[0_8px_40px_rgba(201,169,110,0.15)] ${
                showroom.primary
                  ? 'bg-gradient-to-br from-beige/50 to-cream border-soft-gold/30'
                  : 'bg-white border-warm-sand/40'
              }`}
            >
              {showroom.primary && (
                <span className="inline-block px-3 py-1 bg-soft-gold/10 text-soft-gold rounded-full text-xs font-[family-name:var(--font-outfit)] tracking-wider uppercase mb-4">
                  Flagship Store
                </span>
              )}

              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal-warm mb-6">
                {showroom.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-soft-gold flex-shrink-0 mt-1" size={18} />
                  <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/80 text-sm">
                    {showroom.address}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-soft-gold flex-shrink-0 mt-1" size={18} />
                  <div>
                    {showroom.phone.map((num) => (
                      <a
                        key={num}
                        href={`tel:${num.replace(/\s/g, '')}`}
                        className="font-[family-name:var(--font-outfit)] text-deep-taupe/80 text-sm hover:text-soft-gold transition-colors duration-300 block"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-soft-gold flex-shrink-0 mt-1" size={18} />
                  <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/80 text-sm">
                    {showroom.hours}
                  </p>
                </div>
              </div>

              <a
                href={showroom.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-soft-gold text-white rounded-full font-[family-name:var(--font-outfit)] text-sm tracking-wide hover:bg-soft-gold/90 transition-all duration-300 shadow-[0_4px_15px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_20px_rgba(201,169,110,0.4)]"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </motion.div>
          ))}
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(107,91,78,0.1)] border border-warm-sand/30"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d75.92!3d10.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe37b869a50834c2!2sSanha%20Fashion!5e0!3m2!1sen!2sin!4v1600000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sanha Fashion Location on Google Maps"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
