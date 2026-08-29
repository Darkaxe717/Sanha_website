import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CollectionGrid from '@/components/CollectionGrid';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Collections — Sanha Fashion | The Bridal Destination',
  description:
    'Browse our complete collection of bridal lehengas, silk sarees, designer churidars, men\'s formals, kids wear, and accessories at Sanha Fashion.',
};

export default function CollectionsPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-beige/50 to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-soft-gold" />
            <span className="font-[family-name:var(--font-cormorant)] text-soft-gold text-sm tracking-[0.3em] uppercase">
              Browse All
            </span>
            <div className="w-12 h-[1px] bg-soft-gold" />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-charcoal-warm mb-4">
            Our <span className="text-soft-gold italic">Collections</span>
          </h1>
          <p className="font-[family-name:var(--font-outfit)] text-deep-taupe/70 max-w-2xl mx-auto mb-4">
            Explore every piece in our curated selection. Filter by category to find
            exactly what you&apos;re looking for.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-1 font-[family-name:var(--font-outfit)] text-soft-gold text-sm hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </section>

      <CollectionGrid showAll />
      <Footer />
    </main>
  );
}
