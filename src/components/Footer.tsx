import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#categories', label: 'Categories' },
  { href: '/collections', label: 'Collections' },
  { href: '#showrooms', label: 'Showrooms' },
  { href: '#contact', label: 'Contact' },
];

const categories = [
  'Bridal Wear',
  'Silk Sarees',
  'Churidars & Kurtis',
  "Men's Collection",
  'Kids Wear',
  'Accessories',
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-warm text-white/80 relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-soft-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                Sanha Fashion
              </span>
              <br />
              <span className="font-[family-name:var(--font-cormorant)] text-sm italic tracking-[0.3em] text-soft-gold uppercase">
                The Bridal Destination
              </span>
            </Link>
            <p className="font-[family-name:var(--font-outfit)] text-white/50 text-sm leading-relaxed mt-4">
              Curating timeless elegance since 1975. Your complete family
              fashion destination in Kerala.
            </p>

            {/* Social Media Placeholder */}
            <div className="flex gap-3 mt-6">
              {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-soft-gold hover:bg-soft-gold/10 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="font-[family-name:var(--font-outfit)] text-xs text-white/60">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-outfit)] text-sm text-white/50 hover:text-soft-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-5">
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="font-[family-name:var(--font-outfit)] text-sm text-white/50">
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-soft-gold flex-shrink-0 mt-0.5" size={16} />
                <p className="font-[family-name:var(--font-outfit)] text-sm text-white/50">
                  Ring Road, Tirur – 676101
                  <br />
                  Malappuram, Kerala
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-soft-gold flex-shrink-0 mt-0.5" size={16} />
                <div>
                  <a
                    href="tel:04942423538"
                    className="font-[family-name:var(--font-outfit)] text-sm text-white/50 hover:text-soft-gold transition-colors duration-300 block"
                  >
                    0494 242 3538
                  </a>
                  <a
                    href="tel:9020600400"
                    className="font-[family-name:var(--font-outfit)] text-sm text-white/50 hover:text-soft-gold transition-colors duration-300 block"
                  >
                    9020 600 400
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-soft-gold flex-shrink-0 mt-0.5" size={16} />
                <p className="font-[family-name:var(--font-outfit)] text-sm text-white/50">
                  10:00 AM – 9:30 PM
                  <br />
                  Open all days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-outfit)] text-xs text-white/30">
            © {new Date().getFullYear()} Sanha Fashion. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-outfit)] text-xs text-white/30">
            Crafted with elegance in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
