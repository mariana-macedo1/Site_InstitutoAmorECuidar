export default function Hero() {
  return (
    <section className="md:h-[80vh] h-auto pt-20 md:pt-0 flex items-center justify-center">

      {/* DESKTOP */}
      <img
        src="/hero.png"
        alt="Imagem principal"
        className="hidden md:block h-full object-cover"
      />

      {/* MOBILE */}
      <img
        src="/HeroCelular.png"
        alt="Imagem mobile"
        className="block md:hidden w-full h-auto object-cover"
      />

    </section>
  )
}