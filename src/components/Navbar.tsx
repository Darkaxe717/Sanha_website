'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#categories', label: 'Categories' },
  { href: '#collections', label: 'Collections' },
  { href: '#showrooms', label: 'Showrooms' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(201,169,110,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
              <span
                className={`font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-charcoal-warm' : 'text-white'
                }`}
              >
                Sanha Fashion
              </span>
              <span
                className={`font-[family-name:var(--font-cormorant)] text-[11px] italic tracking-[0.3em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-soft-gold' : 'text-warm-sand'
                }`}
              >
                The Bridal Destination
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-[family-name:var(--font-outfit)] text-sm font-medium tracking-wide transition-colors duration-300 hover:text-soft-gold group ${
                    scrolled ? 'text-deep-taupe' : 'text-white/90'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-soft-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? 'text-charcoal-warm' : 'text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-cream/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 p-2 text-charcoal-warm"
                aria-label="Close navigation menu"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col items-center mb-8">
                <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal-warm">
                  Sanha Fashion
                </span>
                <span className="font-[family-name:var(--font-cormorant)] text-sm italic tracking-[0.3em] text-soft-gold uppercase">
                  The Bridal Destination
                </span>
              </div>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="font-[family-name:var(--font-outfit)] text-xl font-medium text-deep-taupe hover:text-soft-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
