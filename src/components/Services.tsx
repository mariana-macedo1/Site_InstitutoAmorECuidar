export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">
            Nossos Serviços
          </h2>

          <div className="w-24 h-1 bg-[#cf2c53] mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gradient-to-br from-[#e67890] to-[#cf2c53] text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-between text-center hover:scale-105 transition">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Educação e Desenvolvimento
              </h3>

              <p className="text-lg text-white/95">
                Atividades educativas que estimulam o aprendizado,
                o desenvolvimento cognitivo e o fortalecimento
                das habilidades individuais de cada criança.
              </p>
            </div>

            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#cf2c53] transition">
              Saber mais
            </button>

          </div>


          <div className="bg-gradient-to-br from-[#e67890] to-[#cf2c53] text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-between text-center hover:scale-105 transition">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Cultura e Arte
              </h3>

              <p className="text-lg text-white/95">
                Oficinas culturais que incentivam a expressão artística,
                criatividade e socialização através da música,
                contação de histórias e atividades lúdicas.
              </p>
            </div>

            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#cf2c53] transition">
              Saber mais
            </button>

          </div>


          <div className="bg-gradient-to-br from-[#e67890] to-[#cf2c53] text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-between text-center hover:scale-105 transition">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Inclusão Digital
              </h3>

              <p className="text-lg text-white/95">
                Aulas de informática adaptadas que estimulam
                o raciocínio, a autonomia e o aprendizado
                por meio da tecnologia.
              </p>
            </div>

            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#cf2c53] transition">
              Saber mais
            </button>

          </div>

        </div>

        {/* 2 CARDS CENTRALIZADOS */}
        <div className="flex justify-center gap-8 mt-8">

          {/* CARD 4 */}
          <div className="bg-gradient-to-br from-[#e67890] to-[#cf2c53] text-white p-12 shadow-xl min-h-[320px] flex flex-col justify-between text-center hover:scale-105 transition w-full md:w-1/3">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Atividades Esportivas
              </h3>

              <p className="text-lg text-white/95">
                Práticas como o jiu-jitsu ajudam no desenvolvimento
                da disciplina, coordenação motora,
                confiança e socialização.
              </p>
            </div>

            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#cf2c53] transition">
              Saber mais
            </button>

          </div>


          {/* CARD 5 */}
          <div className="bg-gradient-to-br from-[#e67890] to-[#cf2c53] text-white p-12 shadow-xl min-h-[320px] flex flex-col justify-between text-center hover:scale-105 transition w-full md:w-1/3">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Apoio às Famílias
              </h3>

              <p className="text-lg text-white/95">
                Orientação e acompanhamento para familiares,
                fortalecendo o suporte necessário
                ao desenvolvimento das crianças.
              </p>
            </div>

            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#cf2c53] transition">
              Saber mais
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}