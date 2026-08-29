'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import collectionsData from '@/data/collections.json';

interface CollectionItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  featured: boolean;
}

interface CollectionGridProps {
  showAll?: boolean;
}

const categoryLabels: Record<string, string> = {
  all: 'All',
  bridal: 'Bridal',
  sarees: 'Sarees',
  churidars: 'Churidars',
  mens: "Men's",
  kids: 'Kids',
  accessories: 'Accessories',
};

export default function CollectionGrid({ showAll = false }: CollectionGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  const items: CollectionItem[] = showAll
    ? collectionsData.collections
    : collectionsData.collections.filter((item) => item.featured);

  const filteredItems =
    activeFilter === 'all'
      ? items
      : items.filter((item) => item.category === activeFilter);

  const availableCategories = ['all', ...new Set(items.map((item) => item.category))];

  return (
    <>
      <section
        id={showAll ? undefined : 'collections'}
        className={`py-24 md:py-32 relative ${showAll ? '' : 'bg-beige/40'}`}
        ref={ref}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          {!showAll && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-soft-gold" />
                <span className="font-[family-name:var(--font-cormorant)] text-soft-gold text-sm tracking-[0.3em] uppercase">
                  Latest Arrivals
                </span>
                <div className="w-12 h-[1px] bg-soft-gold" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal-warm mb-4">
                Featured <span className="text-soft-gold italic">Collection</span>
              </h2>
              <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 max-w-2xl mx-auto">
                Explore our handpicked selection of the finest garments, curated for
                those who appreciate true craftsmanship.
              </p>
            </motion.div>
          )}

          {/* Filter Tabs */}
          {showAll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2.5 rounded-full font-[family-name:var(--font-outfit)] text-sm tracking-wide transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-soft-gold text-white shadow-[0_4px_15px_rgba(201,169,110,0.4)]'
                      : 'bg-white text-deep-taupe border border-warm-sand hover:border-soft-gold hover:text-soft-gold'
                  }`}
                >
                  {categoryLabels[cat] || cat}
                </button>
              ))}
            </motion.div>
          )}

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(107,91,78,0.08)] hover:shadow-[0_12px_40px_rgba(201,169,110,0.2)] transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-charcoal-warm/0 group-hover:bg-charcoal-warm/30 transition-colors duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/90 rounded-full p-3">
                        <ZoomIn className="text-charcoal-warm" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5">
                    <span className="font-[family-name:var(--font-outfit)] text-soft-gold text-xs tracking-[0.2em] uppercase">
                      {categoryLabels[item.category] || item.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal-warm mt-1 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/60 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Button (only on homepage) */}
          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <a
                href="/collections"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-soft-gold text-soft-gold font-[family-name:var(--font-outfit)] text-sm tracking-[0.15em] uppercase rounded-full hover:bg-soft-gold hover:text-white transition-all duration-400 shadow-[0_4px_15px_rgba(201,169,110,0)] hover:shadow-[0_4px_15px_rgba(201,169,110,0.3)]"
              >
                View All Collections
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal-warm/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors duration-300 shadow-lg"
                aria-label="Close lightbox"
              >
                <X className="text-charcoal-warm" size={20} />
              </button>
              <div className="relative aspect-[3/4] md:aspect-[4/3]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain bg-beige/30"
                />
              </div>
              <div className="p-6">
                <span className="font-[family-name:var(--font-outfit)] text-soft-gold text-xs tracking-[0.2em] uppercase">
                  {categoryLabels[selectedItem.category] || selectedItem.category}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal-warm mt-1">
                  {selectedItem.title}
                </h3>
                <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 mt-2">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
