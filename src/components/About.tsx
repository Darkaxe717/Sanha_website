'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { year: '1975', text: 'Founded in the Sultanate of Oman as a textile trading house' },
  { year: '2005', text: 'Established the flagship showroom in Tirur, Kerala' },
  { year: 'Today', text: 'Two flagship stores spanning 60,000+ sq. ft. across Kerala' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-blush/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(107,91,78,0.15)]">
              <Image
                src="/images/hero.png"
                alt="Sanha Fashion showroom interior"
                fill
                className="object-cover"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-warm/20 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-soft-gold text-white px-8 py-6 rounded-xl shadow-lg">
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold">50+</p>
              <p className="font-[family-name:var(--font-outfit)] text-sm opacity-90">Years of Legacy</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-soft-gold" />
              <span className="font-[family-name:var(--font-cormorant)] text-soft-gold text-sm tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal-warm mb-6 leading-tight">
              A Legacy of
              <br />
              <span className="text-soft-gold italic">Timeless Elegance</span>
            </h2>

            <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/80 text-base leading-relaxed mb-6">
              What began as a humble textile trading house in Oman in 1975 has blossomed into 
              one of Kerala&apos;s most beloved fashion destinations. For over five decades, 
              Sanha Fashion has been synonymous with quality, tradition, and unmatched elegance.
            </p>

            <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/80 text-base leading-relaxed mb-10">
              Our showrooms in Tirur and Valanchery offer a curated experience across 
              multiple floors, dedicated to bridal wear, silk sarees, men&apos;s formals, 
              kids&apos; festive wear, and premium accessories — making us your complete 
              family fashion destination.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-beige flex items-center justify-center border border-warm-sand">
                    <span className="font-[family-name:var(--font-playfair)] text-soft-gold font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="pt-3">
                    <p className="font-[family-name:var(--font-outfit)] text-deep-taupe text-sm leading-relaxed">
                      {milestone.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
