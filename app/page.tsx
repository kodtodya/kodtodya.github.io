import Nav from './components/Nav';
import ScrollyCanvas from './components/ScrollyCanvas';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      {/* Fixed navigation */}
      <Nav />

      {/* ─── SCROLLYTELLING ── 500vh ─── */}
      <ScrollyCanvas />

      {/* ─── BELOW THE FOLD ─── */}
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
