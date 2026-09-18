import { Heart, Sparkles, Users, BookOpen, Smile } from 'lucide-react';

export default function Values() {
  const valores = [
    {
      id: '01',
      title: 'Cuidado Humanizado e Acolhimento',
      desc: 'Cuidado, empatia e respeito às diferenças para que todos se sintam seguros e valorizados.',
      icon: Heart,
    },
    {
      id: '02',
      title: 'Desenvolvimento Integral',
      desc: 'Estímulo às habilidades cognitivas, sociais, emocionais e comportamentais de cada criança.',
      icon: Sparkles,
    },
    {
      id: '03',
      title: 'Inclusão e Respeito às Diferenças',
      desc: 'Diversidade valorizada e oportunidades de aprendizado, convivência e crescimento para todos.',
      icon: Users,
    },
    {
      id: '04',
      title: 'Educação com Propósito',
      desc: 'Experiências práticas que estimulam curiosidade, conhecimento e aprendizado significativo.',
      icon: BookOpen,
    },
    {
      id: '05',
      title: 'Amor, Serviço e Transformação',
      desc: 'Amor ao próximo e desejo de servir para gerar impacto positivo nas crianças e famílias.',
      icon: Smile,
    },
  ];

  return (
    <section 
      id="valores" 
      className="py-24 bg-[url('/fundo2.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* LADO ESQUERDO: TÍTULO */}
        <div className="md:col-span-5 md:sticky md:top-28">
          <span className="text-[#D82B65] font-bold text-xs uppercase tracking-widest block mb-3 bg-white/90 w-fit px-3 py-1 rounded-full border border-pink-100 shadow-xs">
            NOSSOS VALORES
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0E3B] leading-tight mb-6">
            O cuidado é <br />
            a base de <br />
            tudo.
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed max-w-sm bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-pink-100/60 shadow-xs">
            Nosso compromisso é acolher e promover o desenvolvimento de cada criança, respeitando suas individualidades.
          </p>
        </div>

        {/* LADO DIREITO: LISTA 01 a 05 */}
        <div className="md:col-span-7 space-y-6">
          {valores.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-pink-100/80 flex items-start gap-5 shadow-xs hover:bg-white hover:shadow-md transition duration-300"
              >
                <span className="text-[#D82B65] font-bold text-xs pt-1">{item.id}</span>
                
                <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] text-[#D82B65] border border-pink-100 flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0B0E3B] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}