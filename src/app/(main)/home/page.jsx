import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import AdditionalServices from '../../components/AdditionalServices';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <Hero />
        <Services />
        <AdditionalServices />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
