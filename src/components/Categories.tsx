'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const categories = [
  {
    name: 'Bridal Wear',
    description: 'Exquisite lehengas, sarees & gowns for your special day',
    image: '/images/categories/bridal.png',
  },
  {
    name: 'Silk Sarees',
    description: 'Handwoven Kanchipuram, Banarasi & Kerala silk sarees',
    image: '/images/categories/sarees.png',
  },
  {
    name: 'Churidars & Kurtis',
    description: 'Elegant Anarkalis, designer kurtis & salwar collections',
    image: '/images/categories/churidars.png',
  },
  {
    name: "Men's Collection",
    description: 'Premium sherwanis, blazers & formal kurtas',
    image: '/images/categories/mens.png',
  },
  {
    name: 'Kids Wear',
    description: 'Adorable festive & traditional wear for little ones',
    image: '/images/categories/kids.png',
  },
  {
    name: 'Accessories',
    description: 'Clutches, footwear, jewelry & cosmetics',
    image: '/images/categories/accessories.png',
  },
];

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="categories" className="py-24 md:py-32 bg-cream relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 border border-warm-sand/30 rounded-full" />
      <div className="absolute bottom-20 right-20 w-60 h-60 border border-warm-sand/20 rounded-full" />

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
              What We Offer
            </span>
            <div className="w-12 h-[1px] bg-soft-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal-warm mb-4">
            Our <span className="text-soft-gold italic">Collections</span>
          </h2>
          <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 max-w-2xl mx-auto">
            From bridal couture to everyday elegance — discover fashion for every 
            member of your family, curated with love and tradition.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5] shadow-[0_4px_20px_rgba(107,91,78,0.1)] hover:shadow-[0_8px_40px_rgba(201,169,110,0.2)] transition-shadow duration-500"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-warm/80 via-charcoal-warm/20 to-transparent transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {category.name}
                </h3>
                <p className="font-[family-name:var(--font-outfit)] text-white/70 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {category.description}
                </p>
              </div>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-soft-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
