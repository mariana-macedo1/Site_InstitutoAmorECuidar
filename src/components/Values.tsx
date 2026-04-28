export default function Values() {
  return (
    <section id="valores" className="py-20 bg-pink-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Nossos Valores
          </h2>

          <div className="w-24 h-1 bg-[#cf2c53] mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Mais do que oferecer atividades, nosso compromisso é cuidar,
            acolher e promover o desenvolvimento de cada criança,
            respeitando suas individualidades e incentivando seu crescimento
            em um ambiente seguro, inclusivo e cheio de oportunidades.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="bg-gradient-to-br from-[#f7a6b8] to-[#e67890] text-white p-12 rounded-2xl shadow-xl min-h-[300px] flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Cuidado Humanizado e Acolhimento
              </h3>

              <p className="text-lg text-white/95">
                Acreditamos que cada criança é única. Nosso trabalho é baseado
                no cuidado, na empatia e no respeito às diferenças, criando
                um ambiente acolhedor onde todos se sintam seguros,
                valorizados e compreendidos.
              </p>
            </div>

          </div>


          {/* CARD */}
          <div className="bg-gradient-to-br from-[#f7a6b8] to-[#e67890] text-white p-12 rounded-2xl shadow-xl min-h-[300px] flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Desenvolvimento Integral
              </h3>

              <p className="text-lg text-white/95">
                Nossas atividades estimulam o desenvolvimento cognitivo,
                social, emocional e comportamental, fortalecendo habilidades
                e incentivando a autonomia para que cada criança alcance
                seu potencial.
              </p>
            </div>

          </div>


          {/* CARD */}
          <div className="bg-gradient-to-br from-[#f7a6b8] to-[#e67890] text-white p-12 rounded-2xl shadow-xl min-h-[300px] flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Inclusão e Respeito às Diferenças
              </h3>

              <p className="text-lg text-white/95">
                Promovemos a inclusão e valorizamos a diversidade,
                garantindo que todas as crianças tenham acesso a
                oportunidades de aprendizado, convivência e crescimento.
              </p>
            </div>

          </div>

        </div>


        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">

          <div className="bg-gradient-to-br from-[#f7a6b8] to-[#e67890] text-white p-12 rounded-2xl shadow-xl min-h-[320px] flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition w-full md:w-1/3">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Educação e Aprendizado com Propósito
              </h3>

              <p className="text-lg text-white/95">
                Acreditamos que a educação transforma vidas. Por meio
                de oficinas e experiências práticas, estimulamos a
                curiosidade, o conhecimento e o aprendizado de forma
                leve e significativa.
              </p>
            </div>

          </div>


          <div className="bg-gradient-to-br from-[#f7a6b8] to-[#e67890] text-white p-12 rounded-2xl shadow-xl min-h-[320px] flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition w-full md:w-1/3">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Amor, Serviço e Transformação
              </h3>

              <p className="text-lg text-white/95">
                Nosso trabalho é guiado pelo amor ao próximo e pelo
                desejo de servir, buscando gerar impacto positivo na
                vida das crianças e de suas famílias.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
