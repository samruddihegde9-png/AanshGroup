import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Portfolio from '@/components/Portfolio';
import Clients from '@/components/Clients';
import Awards from '@/components/Awards';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Portfolio />
      <Clients />
      <Awards />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
