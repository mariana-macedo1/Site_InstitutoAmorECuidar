import { MapPin, MessageCircle, Instagram } from "lucide-react";

export default function Contact1() {
  return (
    <section className="py-20 bg-white px-6 md:px-0">
      <div className="max-w-6xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Nossos Contatos
          </h2>
          <div className="w-24 h-1 bg-[#cf2c53] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* CARD PRINCIPAL */}
        <div className="bg-gradient-to-br from-[#e67890] to-[#cf2c53] text-white rounded-2xl px-8 md:px-12 py-12 md:py-16 shadow-xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            {/* ENDEREÇO */}
            <div className="flex items-start gap-5 group">
              <div className="p-3 rounded-full bg-white/20 group-hover:bg-white transition">
                <MapPin size={28} className="group-hover:text-[#cf2c53] transition" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Nosso Endereço
                </h3>

                <p className="text-white/90 leading-relaxed">
                  Rua Edgar Cavalcante Pedrosa 188, Cuiá,
                  <br />
                  João Pessoa - PB
                </p>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="flex items-start gap-5 group">
              <div className="p-3 rounded-full bg-white/20 group-hover:bg-white transition">
                <MessageCircle size={28} className="group-hover:text-[#cf2c53] transition" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  WhatsApp
                </h3>

                <p className="text-white/90">
                  83 9929-1187
                </p>
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="flex items-start gap-5 group">
              <div className="p-3 rounded-full bg-white/20 group-hover:bg-white transition">
                <Instagram size={28} className="group-hover:text-[#cf2c53] transition" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Instagram
                </h3>

                <p className="text-white/90">
                  @institutoamorecuidar
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}