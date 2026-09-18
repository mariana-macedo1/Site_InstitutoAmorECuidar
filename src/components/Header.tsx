import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem somos', href: '#quem-somos' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Oficinas', href: '#oficinas' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Instituto Amor e Cuidar" 
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700 text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="hover:text-[#D82B65] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BOTÃO CTA DESKTOP */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5583999291187"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D82B65] hover:bg-[#c02153] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition shadow-sm"
          >
            Entre em contato
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* BOTAO MENU MOBILE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-700 p-2 focus:outline-none"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE SLIDE */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-pink-100 px-6 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-800 font-medium py-2 hover:text-[#D82B65]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5583999291187"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#D82B65] text-white py-3 rounded-full font-semibold mt-2"
          >
            Entre em contato
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}