import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-nagrik-bg text-nagrik-dark font-sans selection:bg-nagrik-maroon selection:text-nagrik-bg">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
