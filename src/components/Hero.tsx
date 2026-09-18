import { ArrowUpRight, MessageCircle, Heart, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-16 bg-[#FFF5F7] min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO: TEXTOS */}
        <div>
          <div className="inline-flex items-center gap-2 text-[#D82B65] font-bold text-xs uppercase tracking-wider mb-6">
            <span className="w-6 h-[2px] bg-[#D82B65]"></span>
            <Heart size={14} className="fill-current" />
            INSTITUTO AMOR E CUIDAR
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0B0E3B] leading-[1.15] mb-6">
            Onde cada <br />
            criança <br />
            pode <br />
            <span className="text-[#D82B65]">florescer.</span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
            Acolhimento, educação e inclusão para fortalecer o potencial único de crianças neuroatípicas e suas famílias.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="https://wa.me/5583999291187"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D82B65] hover:bg-[#c02153] text-white px-7 py-3.5 rounded-full font-semibold transition shadow-md"
            >
              Conheça nosso trabalho
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://wa.me/5583999291187"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-pink-300 text-slate-700 px-7 py-3.5 rounded-full font-semibold transition shadow-sm"
            >
              Fale conosco
              <MessageCircle size={18} className="text-[#D82B65]" />
            </a>
          </div>

          {/* TAGS INFERIORES */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Acolhimento' },
              { label: 'Inclusão' },
              { label: 'Desenvolvimento' },
              { label: 'Cuidado' },
            ].map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 bg-white/80 border border-pink-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-2xs"
              >
                <Sparkles size={14} className="text-[#D82B65]" />
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* LADO DIREITO: FOTO ORGÂNICA COM BADGES */}
        <div className="relative flex justify-center">
          {/* MOLDURA ORGÂNICA DA IMAGEM */}
          <div className="relative w-full max-w-md aspect-square rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/hero.jpeg"
              alt="Crianças brincando juntas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BADGE SUPERIOR DIREITO */}
          <div className="absolute top-4 right-4 bg-pink-100 text-[#D82B65] p-3 rounded-full shadow-md">
            <Heart size={24} className="fill-current" />
          </div>

          {/* BADGE FLUTUANTE INFERIOR ESQUERDO */}
          <div className="absolute bottom-6 -left-4 md:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-pink-50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#D82B65] flex items-center justify-center font-bold">
              <Heart size={20} className="fill-current" />
            </div>
            <div>
              <p className="font-bold text-[#0B0E3B] text-sm">Cuidado que acolhe</p>
              <p className="text-xs text-slate-500">Ambiente seguro e inclusivo</p>
            </div>
          </div>
        </div>

      </div>

      {/* SETA DE SCROLL */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <a href="#quem-somos" className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center border border-pink-100 shadow-xs hover:text-[#D82B65] transition">
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}