export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50 px-6 md:px-0">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center">
          <img
            src="/about2.png"
            alt="Equipe do Instituto Amor e Cuidar"
            className="w-[120%] md:w-[130%] lg:w-[150%] max-w-none rounded-2xl object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">
            Quem Somos
          </h2>

          <div className="w-24 h-1 bg-[#cf2c53] mx-auto mt-3"></div>
        </div>

          <p className="text-gray-600 leading-relaxed mb-4">
          O <span className="font-bold text-lg">Instituto Amor e Cuidar</span> é uma organização social dedicada ao acolhimento e ao desenvolvimento de crianças neuroatípicas, oferecendo oportunidades de aprendizado, convivência e crescimento em um ambiente seguro, inclusivo e cheio de cuidado.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Nossa missão é promover o desenvolvimento integral das crianças por meio de atividades educativas, culturais e sociais que estimulam habilidades cognitivas, emocionais e comportamentais. Acreditamos que cada criança possui um potencial único, que pode florescer quando recebe atenção, respeito e oportunidades adequadas.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Por meio de oficinas, vivências e atividades educativas, buscamos contribuir para a construção de uma sociedade mais inclusiva, onde todas as crianças possam se desenvolver com dignidade, autonomia e confiança.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Mais do que um espaço de aprendizado, o <span className="font-bold text-lg">Instituto Amor e Cuidar</span> é um lugar de acolhimento, afeto e transformação, onde o cuidado é a base de tudo e servir ao próximo é a nossa vocação. Nossa missão é cuidar. Nossa vocação é servir.
        </p>

        </div>

      </div>

    </section>
  )
}