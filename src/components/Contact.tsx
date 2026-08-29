'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-beige/30 to-cream relative">
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
              Get in Touch
            </span>
            <div className="w-12 h-[1px] bg-soft-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal-warm mb-4">
            Contact <span className="text-soft-gold italic">Us</span>
          </h2>
          <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for inquiries, appointments,
            or just to say hello.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 text-center border border-warm-sand/30 hover:border-soft-gold/40 hover:shadow-[0_8px_30px_rgba(201,169,110,0.12)] transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-soft-gold/10 flex items-center justify-center mx-auto mb-5">
              <Phone className="text-soft-gold" size={22} />
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal-warm mb-3">
              Call Us
            </h3>
            <a
              href="tel:04942423538"
              className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 text-sm hover:text-soft-gold transition-colors duration-300 block mb-1"
            >
              0494 242 3538
            </a>
            <a
              href="tel:9020600400"
              className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 text-sm hover:text-soft-gold transition-colors duration-300 block"
            >
              9020 600 400
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 text-center border border-warm-sand/30 hover:border-soft-gold/40 hover:shadow-[0_8px_30px_rgba(201,169,110,0.12)] transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-soft-gold/10 flex items-center justify-center mx-auto mb-5">
              <MessageCircle className="text-soft-gold" size={22} />
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal-warm mb-3">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/919020600400?text=Hi%20Sanha%20Fashion!%20I%20would%20like%20to%20inquire%20about%20your%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-soft-gold text-white rounded-full font-[family-name:var(--font-outfit)] text-sm hover:bg-soft-gold/90 transition-all duration-300 shadow-[0_4px_15px_rgba(201,169,110,0.3)]"
            >
              Chat with Us
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 text-center border border-warm-sand/30 hover:border-soft-gold/40 hover:shadow-[0_8px_30px_rgba(201,169,110,0.12)] transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-soft-gold/10 flex items-center justify-center mx-auto mb-5">
              <MapPin className="text-soft-gold" size={22} />
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal-warm mb-3">
              Visit Us
            </h3>
            <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 text-sm">
              Ring Road, Tirur
              <br />
              Kerala – 676101
            </p>
          </motion.div>
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="mailto:info@sanhafashion.com"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-outfit)] text-deep-taupe/60 text-sm hover:text-soft-gold transition-colors duration-300"
          >
            <Mail size={16} />
            info@sanhafashion.com
          </a>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919020600400?text=Hi%20Sanha%20Fashion!%20I%20would%20like%20to%20inquire%20about%20your%20collection."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </section>
  );
}
