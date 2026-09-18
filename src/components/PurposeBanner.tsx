import { HeartHandshake } from 'lucide-react';

export default function PurposeBanner() {
  return (
    <section className="py-20 bg-[#0B0E3B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* ÍCONE EM CÍRCULO ROSA */}
        <div className="w-24 h-24 rounded-full bg-[#D82B65] flex items-center justify-center shrink-0 shadow-lg">
          <HeartHandshake size={44} className="text-white" />
        </div>

        {/* CONTEÚDO */}
        <div>
          <span className="text-pink-300 font-bold text-xs uppercase tracking-widest block mb-2">
            NOSSO PROPÓSITO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            “Nossa missão é cuidar. <br />
            Nossa vocação é servir.”
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Acreditamos que o potencial de cada criança floresce quando encontra atenção, respeito e oportunidades adequadas.
          </p>
        </div>

      </div>
    </section>
  );
}