export default function Contact() {
  return (
    <section id="contato" className="pb-1">

      <div className="max-w-6xl mx-auto px-6">

        <div className="relative w-full">

          {/* Imagem */}
          <picture>
            <source media="(max-width: 768px)" srcSet="/contactCelular.png" />
            <img
              src="/contact.png"
              alt="Instituto Amor e Cuidar"
              className="w-full h-auto object-cover rounded-xl"
            />
          </picture>

          {/* Conteúdo sobre a imagem */}
          <div className="absolute inset-0 flex flex-col justify-end items-start pl-6 lg:pl-28 pb-12 md:pb-20 translate-y-8">

            {/* Frase principal + botão */}
            <div className="flex items-center gap-6 mb-6">

              <p className="text-3xl md:text-4xl font-bold text-black">
                Ajude-nos a transformar o futuro de muitas crianças!
              </p>

              <a
                href="https://wa.me/5583999291187?text=Tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20o%20Instituto%20Amor%20e%20Cuidar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 mt-2 rounded-lg font-semibold bg-[#cd2e53] text-white hover:bg-white hover:text-[#cd2e53] transition whitespace-nowrap translate-y-8 text-sm md:text-base"
              >
                Falar no WhatsApp
              </a>

            </div>

            <p className="text-base md:text-lg text-black max-w-2xl leading-relaxed">
              Entre em contato com o <strong>Instituto Amor e Cuidar</strong> e saiba
              como inscrever seu filho ou conhecer nossas
              atividades.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}
