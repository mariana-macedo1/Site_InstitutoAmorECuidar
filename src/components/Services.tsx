import { BookOpen, Palette, Monitor, Dumbbell, Users, Heart, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: '01',
      badge: 'Aprendizado adaptado',
      title: 'Educação e Desenvolvimento',
      desc: 'Atividades lúdicas e estruturadas que estimulam a cognição, a curiosidade e o fortalecimento do potencial único de cada criança.',
      icon: BookOpen,
    },
    {
      id: '02',
      badge: 'Expressão e Sensibilidade',
      title: 'Cultura e Arte',
      desc: 'Oficinas de música, pintura e contação de histórias para soltar a criatividade, integrar os alunos e incentivar a comunicação.',
      icon: Palette,
    },
    {
      id: '03',
      badge: 'Conexão e Autonomia',
      title: 'Inclusão Digital',
      desc: 'Aulas práticas de informática adaptadas para desenvolver o raciocínio lógico, a concentração e a independência tecnológica.',
      icon: Monitor,
    },
    {
      id: '04',
      badge: 'Corpo e Saúde',
      title: 'Atividades Esportivas',
      desc: 'Práticas como o Jiu-Jitsu estimulam o autocontrole, a coordenação motora, o respeito e a confiança em um ambiente seguro.',
      icon: Dumbbell,
    },
    {
      id: '05',
      badge: 'Rede de Suporte',
      title: 'Apoio às Famílias',
      desc: 'Escuta qualificada, orientação e acolhimento contínuo para mães, pais e cuidadores, fortalecendo a união familiar.',
      icon: Users,
    },
    {
      id: '06',
      badge: 'Cidadania e Vínculos',
      title: 'Autonomia e Convivência',
      desc: 'Vivências práticas em grupo que trabalham empatia, cooperação e habilidades sociais essenciais para o dia a dia.',
      icon: Heart,
    },
  ];

  return (
    <section 
      id="servicos" 
      className="py-24 bg-[url('/fundo.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[#D82B65] font-bold text-xs uppercase tracking-widest mb-3 bg-white/90 px-3 py-1 rounded-full shadow-xs border border-pink-100">
              <Sparkles size={14} className="text-[#D82B65]" />
              O QUE FAZEMOS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0E3B] leading-[1.15]">
              Cuidado em todas as <br />
              <span className="text-[#D82B65]">dimensões da vida.</span>
            </h2>
          </div>

          <p className="text-slate-600 max-w-md text-sm md:text-base leading-relaxed bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-pink-100/60 shadow-xs">
            Atividades pensadas para apoiar o desenvolvimento, a autonomia e os vínculos de cada criança e sua família.
          </p>
        </div>

        {/* GRID DE CARDS (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white/95 backdrop-blur-xs rounded-3xl p-8 relative flex flex-col justify-between border border-pink-100/80 shadow-xs hover:shadow-xl hover:border-[#D82B65]/30 hover:-translate-y-1 transition-all duration-300 min-h-[290px]"
              >
                <div>
                  {/* TOPO DO CARD */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF5F7] border border-pink-100 flex items-center justify-center text-[#D82B65] group-hover:bg-[#D82B65] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon size={22} />
                    </div>
                    <span className="text-slate-300 font-extrabold text-sm group-hover:text-[#D82B65] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  {/* BADGE */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF5F7] text-[#D82B65] border border-pink-100">
                      {service.badge}
                    </span>
                  </div>

                  {/* TÍTULO E DESCRIÇÃO */}
                  <h3 className="text-xl font-bold text-[#0B0E3B] mb-3 group-hover:text-[#D82B65] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* RODAPÉ DO CARD */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B0E3B] group-hover:text-[#D82B65]">
                  <span>Saiba mais</span>
                  <div className="w-7 h-7 rounded-full bg-[#FFF5F7] flex items-center justify-center text-[#D82B65] group-hover:bg-[#D82B65] group-hover:text-white transition-all shadow-xs">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}