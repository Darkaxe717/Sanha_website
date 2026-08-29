import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Categories from '@/components/Categories';
import CollectionGrid from '@/components/CollectionGrid';
import Showrooms from '@/components/Showrooms';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <CollectionGrid />
      <Showrooms />
      <Contact />
      <Footer />
    </main>
  );
}
