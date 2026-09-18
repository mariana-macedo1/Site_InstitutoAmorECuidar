import React from 'react';
import { MessageCircle, Instagram, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      {/* Adicionado padding horizontal (px-6 sm:px-8) para centralizar no celular */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        
        {/* CONTATO DETALHADO */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-6">
            <span className="text-[#D82B65] font-bold text-xs uppercase tracking-widest block mb-2">
              CONTATO
            </span>
            <h2 className="text-4xl font-extrabold text-[#0B0E3B] mb-4 leading-tight">
              Estamos aqui para acolher você.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Entre em contato com o Instituto Amor e Cuidar e saiba como inscrever seu filho ou conhecer nossas atividades.
            </p>

            <a
              href="https://wa.me/5583999291187"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D82B65] hover:bg-[#c02153] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition"
            >
              <MessageCircle size={18} />
              Conversar no WhatsApp
            </a>
          </div>

          <div className="md:col-span-6 space-y-4">
            
            <a
              href="https://wa.me/5583999291187"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 hover:bg-pink-50 transition border border-slate-100 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#D82B65] flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">WhatsApp</p>
                  <p className="font-bold text-[#0B0E3B] text-sm">(83) 99929-1187</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#D82B65]" />
            </a>

            <a
              href="https://www.instagram.com/institutoamorecuidar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 hover:bg-pink-50 transition border border-slate-100 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#D82B65] flex items-center justify-center shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Instagram</p>
                  <p className="font-bold text-[#0B0E3B] text-sm">@institutoamorecuidar</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#D82B65]" />
            </a>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#D82B65] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Endereço</p>
                  <p className="font-bold text-[#0B0E3B] text-sm">
                    Rua Edgar Cavalcante Pedrosa, 188 — Cuiá, João Pessoa — PB
                  </p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-400 shrink-0" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}