'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Sanha Fashion luxury showroom interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-warm/60 via-charcoal-warm/40 to-charcoal-warm/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-warm/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[1px] bg-soft-gold mb-8"
        />

        {/* Tagline above */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-cormorant)] text-warm-sand text-lg md:text-xl tracking-[0.4em] uppercase mb-4"
        >
          Welcome to
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
        >
          Sanha Fashion
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl lg:text-4xl italic text-soft-gold tracking-wider mb-8"
        >
          The Bridal Destination
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-[family-name:var(--font-outfit)] text-white/70 text-sm md:text-base max-w-xl mb-10 leading-relaxed"
        >
          Curating timeless elegance since 1975. Discover our exquisite collection
          of bridal wear, silk sarees, and designer garments.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="group relative px-10 py-4 border border-soft-gold/60 text-soft-gold font-[family-name:var(--font-outfit)] text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:text-charcoal-warm"
        >
          <span className="absolute inset-0 bg-soft-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative z-10">Explore Collection</span>
        </motion.a>

        {/* Decorative Line below */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="h-[1px] bg-soft-gold mt-12"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-outfit)] text-white/40 text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-soft-gold/60" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
