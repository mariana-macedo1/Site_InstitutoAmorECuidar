import { useState } from "react"
import { Link } from "react-router-dom"
import { MoreVertical, X } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <header className="hidden lg:block fixed top-0 left-0 w-full z-[900]">
        <div className="relative w-full">
          <img
            src="/header.png"
            alt="Header desktop"
            className="w-full h-auto max-h-64 object-contain"
          />

          <nav className="absolute top-8 left-1/2 -translate-x-1/2 translate-x-20 flex items-center gap-3 text-black text-base font-bold">
            <Link to="/" className="hover:text-[#cd2e53]">HOME</Link>
            <span>|</span>
            <Link to="/quem-somos" className="hover:text-[#cd2e53]">QUEM SOMOS</Link>
            <span>|</span>
            <Link to="/servicos" className="hover:text-[#cd2e53]">SERVIÇOS</Link>
            <span>|</span>
            <Link to="/valores" className="hover:text-[#cd2e53]">VALORES</Link>
            <span>|</span>
            <Link to="/galeria" className="hover:text-[#cd2e53]">GALERIA</Link>
            <span>|</span>
            <Link to="/contato" className="hover:text-[#cd2e53]">CONTATO</Link>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE + TABLET ================= */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-[9999]">
        <img
          src="/HeaderCelular.png"
          alt="Header mobile"
          className="w-full h-20 sm:h-24 md:h-28 object-cover block"
        />

        {/* 🔥 BOTÃO CONTINUA NA ESQUERDA (SEM ALTERAR) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-3 left-4 z-[10000] bg-white text-[#cd2e53] p-3 rounded-full shadow-lg"
        >
          <MoreVertical size={24} />
        </button>
      </header>

      {/* FUNDO ESCURO */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-[10001]"
        />
      )}

      {/* MENU LATERAL */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-[10002] shadow-2xl p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold text-[#cd2e53]">Menu</h2>

          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-black font-bold">
          <Link onClick={() => setMenuOpen(false)} to="/">HOME</Link>
          <Link onClick={() => setMenuOpen(false)} to="/quem-somos">QUEM SOMOS</Link>
          <Link onClick={() => setMenuOpen(false)} to="/servicos">SERVIÇOS</Link>
          <Link onClick={() => setMenuOpen(false)} to="/valores">VALORES</Link>
          <Link onClick={() => setMenuOpen(false)} to="/galeria">GALERIA</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contato">CONTATO</Link>
        </nav>
      </aside>
    </>
  )
}