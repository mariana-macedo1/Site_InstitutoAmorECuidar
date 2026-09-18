import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0E3B] text-white pt-16 pb-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
        
        {/* LOGO EM CARD BRANCO */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white p-4 rounded-2xl inline-block">
            <img src="/logo.png" alt="Instituto Amor e Cuidar" className="h-10 w-auto" />
          </div>
          <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
            Cuidando, acolhendo e promovendo o desenvolvimento com amor.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="md:col-span-3 space-y-3">
          <p className="font-bold text-sm text-white">Navegue</p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li><a href="#inicio" className="hover:text-pink-300">Início</a></li>
            <li><a href="#quem-somos" className="hover:text-pink-300">Quem somos</a></li>
            <li><a href="#servicos" className="hover:text-pink-300">Serviços</a></li>
            <li><a href="#oficinas" className="hover:text-pink-300">Oficinas</a></li>
            <li><a href="#galeria" className="hover:text-pink-300">Galeria</a></li>
          </ul>
        </div>

        {/* CONECTE-SE */}
        <div className="md:col-span-4 space-y-3">
          <p className="font-bold text-sm text-white">Conecte-se</p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <a href="https://wa.me/5583999291187" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 inline-flex items-center gap-1">
                WhatsApp <ArrowUpRight size={12} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/institutoamorecuidar/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 inline-flex items-center gap-1">
                Instagram <ArrowUpRight size={12} />
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT BASE */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
        <p>© 2026 Instituto Amor e Cuidar.</p>
        <p>Nossa missão é cuidar. Nossa vocação é servir.</p>
      </div>

      {/* BOTÃO FLUTUANTE FIXO NO CANTO INFERIOR DIREITO */}
      <a
        href="https://wa.me/5583999291187"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#0B0E3B] text-white px-5 py-3 rounded-full text-xs font-bold border border-pink-300/30 shadow-2xl flex items-center gap-2 hover:bg-[#15195c] transition"
      >
        <MessageCircle size={16} className="text-pink-400" />
        Fale conosco
      </a>
    </footer>
  );
}