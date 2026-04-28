import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Oficinas from "./components/Oficinas"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Values from "./components/Values"
import Contact1 from "./components/Contact1"

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Oficinas />
      <Gallery />
    </>
  )
}

export default function App() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/oficinas" element={<Oficinas />} />
          <Route path="/valores" element={<Values />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contato" element={<Contact1 />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}