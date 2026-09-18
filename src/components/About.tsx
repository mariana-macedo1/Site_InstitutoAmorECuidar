import React from 'react';
import { ShieldCheck, Heart, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="quem-somos" 
      className="py-24 bg-[url('/fundo5.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-14 items-center relative z-10">
        
        {/* FOTO À ESQUERDA - TAMANHO AMPLIADO */}
        <div className="md:col-span-6 lg:col-span-6 relative w-full flex justify-center">
          <div className="w-full overflow-hidden rounded-3xl border border-slate-100/80 shadow-sm">
            <img
              src="/about2.png"
              alt="Equipe do Instituto Amor e Cuidar"
              className="w-full h-auto object-cover rounded-3xl scale-110 md:scale-125 transform transition-transform duration-500 hover:scale-130"
            />
          </div>
        </div>

        {/* CONTEÚDO À DIREITA */}
        <div className="md:col-span-6 lg:col-span-6">
          <span className="text-[#D82B65] font-bold text-xs uppercase tracking-widest block mb-3 bg-white/90 w-fit px-3 py-1 rounded-full border border-pink-100 shadow-xs">
            QUEM SOMOS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0E3B] leading-tight mb-6">
            Cada criança tem um potencial único.
          </h2>

          <div className="space-y-4 text-slate-600 leading-relaxed text-base bg-white/70 backdrop-blur-xs p-6 rounded-3xl border border-pink-100/60 shadow-xs">
            <p>
              O <strong className="text-slate-800">Instituto Amor e Cuidar</strong> é uma organização social dedicada ao acolhimento e ao desenvolvimento de crianças neuroatípicas, oferecendo oportunidades de aprendizado, convivência e crescimento em um ambiente seguro, inclusivo e cheio de cuidado.
            </p>
            <p>
              Nossa missão é promover o desenvolvimento integral das crianças por meio de atividades educativas, culturais e sociais que estimulam habilidades cognitivas, emocionais e comportamentais.
            </p>
            <p>
              Por meio de oficinas, vivências e atividades educativas, buscamos contribuir para uma sociedade mais inclusiva, onde todas as crianças possam se desenvolver com dignidade, autonomia e confiança.
            </p>
          </div>

          {/* TRÊS PILARES NA BASE */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200/60">
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-pink-100/60">
              <ShieldCheck size={18} className="text-[#D82B65] shrink-0" />
              <span className="text-xs font-bold text-[#0B0E3B]">Ambiente seguro</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-pink-100/60">
              <Heart size={18} className="text-[#D82B65] shrink-0" />
              <span className="text-xs font-bold text-[#0B0E3B]">Respeito às diferenças</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-pink-100/60">
              <BookOpen size={18} className="text-[#D82B65] shrink-0" />
              <span className="text-xs font-bold text-[#0B0E3B]">Aprendizado com afeto</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}