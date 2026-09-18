import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Oficinas from './components/Oficinas';
import PurposeBanner from './components/PurposeBanner';
import Values from './components/Values';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Oficinas />
        <PurposeBanner />
        <Values />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}