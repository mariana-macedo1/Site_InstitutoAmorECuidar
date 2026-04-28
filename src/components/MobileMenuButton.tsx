import { useState } from "react"
import { Link } from "react-router-dom"
import { MoreVertical, X } from "lucide-react"

export default function MobileMenuButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* BOTÃO FIXO GLOBAL */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 right-4 z-[99999] bg-white text-[#cd2e53] p-3 rounded-full shadow-xl"
      >
        <MoreVertical size={26} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[99998]"
        />
      )}

      {/* MENU */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-[99999] shadow-2xl p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold text-[#cd2e53]">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-black font-bold">
          <Link onClick={() => setOpen(false)} to="/">HOME</Link>
          <Link onClick={() => setOpen(false)} to="/quem-somos">QUEM SOMOS</Link>
          <Link onClick={() => setOpen(false)} to="/servicos">SERVIÇOS</Link>
          <Link onClick={() => setOpen(false)} to="/valores">VALORES</Link>
          <Link onClick={() => setOpen(false)} to="/galeria">GALERIA</Link>
          <Link onClick={() => setOpen(false)} to="/contato">CONTATO</Link>
        </nav>
      </aside>
    </>
  )
}