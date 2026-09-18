import React from 'react';
import { Users, Music, Monitor, BookOpen, Dumbbell, Activity } from 'lucide-react';

export default function Oficinas() {
  const oficinas = [
    {
      title: 'Jiu-Jitsu',
      desc: 'Arte marcial que desenvolve disciplina, respeito, confiança e coordenação motora.',
      icon: Dumbbell,
      image: '/jiujitsu.jpeg', // Atividade física / quadra
    },
    {
      title: 'Educação Física',
      desc: 'Atividades corporais que estimulam movimento, saúde, cooperação e desenvolvimento motor.',
      icon: Activity,
      image: '/imagem11.jpeg', // Dinâmicas e exercícios corporais
    },
    {
      title: 'Informática',
      desc: 'Tecnologia educativa para desenvolver raciocínio, criatividade e autonomia.',
      icon: Monitor,
      image: '/informatica.jpeg', // Foto das crianças na informática
    },
    {
      title: 'Violão',
      desc: 'Música para estimular coordenação, concentração, disciplina e expressão.',
      icon: Music,
      image: '/imagem4.jpeg', // Foto do projeto de música/oficina
    },
    {
      title: 'Contação de Histórias',
      desc: 'Histórias lúdicas que estimulam imaginação, criatividade, linguagem e expressão.',
      icon: BookOpen,
      image: '/historia.jpeg', // Atividades lúdicas e leitura
    },
    {
      title: 'Vivências',
      desc: 'Habilidades sociais, respeito, empatia, convivência e autonomia.',
      icon: Users,
      image: '/vivencia.png', // Imagem de vivências/oficinas
    },
  ];

  return (
    <section id="oficinas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO CENTRAL */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D82B65] font-bold text-xs uppercase tracking-widest block mb-3">
            OFICINAS E ATIVIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0E3B] mb-4">
            Aprender, conviver e <br /> descobrir.
          </h2>
          <p className="text-slate-500 text-sm">
            Experiências que transformam o cotidiano em oportunidades de desenvolvimento.
          </p>
        </div>

        {/* CARDS COM FOTO DE FUNDO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {oficinas.map((oficina) => {
            const Icon = oficina.icon;
            return (
              <div
                key={oficina.title}
                className="relative h-[380px] rounded-3xl overflow-hidden group shadow-md"
              >
                <img
                  src={oficina.image}
                  alt={oficina.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E3B]/90 via-[#0B0E3B]/40 to-transparent p-6 flex flex-col justify-end text-white">
                  <div className="w-10 h-10 rounded-xl bg-[#D82B65] flex items-center justify-center mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{oficina.title}</h3>
                  <p className="text-white/80 text-xs leading-relaxed">{oficina.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}