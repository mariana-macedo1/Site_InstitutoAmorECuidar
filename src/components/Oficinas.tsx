export default function Oficinas() {
  return (
    <section id="servicos" className="py-10 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#cf2c53] to-pink-500 bg-clip-text text-transparent">
            Oficinas
          </h2>

          <div className="w-24 h-1 bg-[#cf2c53] mx-auto mt-4 rounded-full"></div>

        </div>


        {/* GRID 3 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="group bg-pink-50 border border-pink-100 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-[#cf2c53]">
              Vivências
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Oficinas que auxiliam no desenvolvimento de
              habilidades sociais e comportamentais,
              trabalhando valores como respeito,
              empatia, convivência e autonomia.
            </p>

          </div>


          {/* CARD */}
          <div className="group bg-pink-50 border border-pink-100 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-[#cf2c53]">
              Violão
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Introdução ao universo da música de forma
              leve e estimulante, desenvolvendo
              coordenação motora, concentração,
              disciplina e expressão artística.
            </p>

          </div>


          {/* CARD */}
          <div className="group bg-pink-50 border border-pink-100 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-[#cf2c53]">
              Informática
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Aulas que ensinam o uso do computador
              e ferramentas digitais de forma educativa,
              estimulando raciocínio lógico, criatividade
              e autonomia.
            </p>

          </div>

        </div>


        {/* GRID 2 CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">

          {/* CARD */}
          <div className="group bg-pink-50 border border-pink-100 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-[#cf2c53]">
              Contação de Histórias
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Momento de imaginação e aprendizado
              através de narrativas envolventes,
              estimulando criatividade, escuta,
              interpretação e o gosto pela leitura.
            </p>

          </div>


          {/* CARD */}
          <div className="group bg-pink-50 border border-pink-100 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-[#cf2c53]">
              Alimentação Saudável
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Atividades educativas que ensinam sobre
              nutrição, hábitos saudáveis e escolhas
              alimentares que contribuem para o
              crescimento e bem-estar.
            </p>

          </div>


          {/* NOVO CARD */}
          <div className="group bg-pink-50 border border-pink-100 rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center">

            <h3 className="text-2xl font-bold mb-4 text-[#cf2c53]">
              Jiu-Jitsu
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Prática esportiva que desenvolve disciplina,
              respeito, autocontrole e confiança,
              além de promover saúde física, foco
              e habilidades de defesa pessoal.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}