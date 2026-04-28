import { MessageCircle, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'QUEM SOMOS', path: '/quem-somos' },
    { label: 'SERVIÇOS', path: '/servicos' },
    { label: 'GALERIA', path: '/galeria' },
    { label: 'FALE CONOSCO', path: '/contato' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 text-gray-800 py-14 border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* LOGO */}
        <div className="flex flex-col items-start">
          <img 
            src="/logo.png" 
            alt="Instituto Antenor Rodrigues" 
            className="h-20 w-auto"
          />

          <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xs">
            Cuidando, acolhendo e promovendo o desenvolvimento com amor.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-black">Menu</h3>

          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center group w-fit"
                >
                  <span className="text-[#cf2c53] mr-2 font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>

                  <span className="text-sm font-semibold text-gray-600 group-hover:text-[#cf2c53] transition-colors">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATO */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-black">
            Informações de Contato
          </h3>

          <div className="space-y-5">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/558399291187"
              target="_blank"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition">
                <MessageCircle size={20} className="text-green-600 group-hover:text-white transition" />
              </div>

              <span className="text-lg font-medium text-gray-600 group-hover:text-black transition">
                83 9929-1187
              </span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/institutoamorecuidar"
              target="_blank"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 transition">
                <Instagram size={20} className="text-[#cf2c53] group-hover:text-white transition" />
              </div>

              <span className="text-lg font-medium text-gray-600 group-hover:text-black transition">
                @institutoamorecuidar
              </span>
            </a>

            {/* LOCALIZAÇÃO */}
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shrink-0 group-hover:bg-[#cf2c53] transition">
                <MapPin size={20} className="text-[#cf2c53] group-hover:text-white transition" />
              </div>

              <span className="text-base font-medium text-gray-600 leading-relaxed group-hover:text-black transition">
                Rua Edgar Cavalcante Pedrosa 188, Cuiá, João Pessoa - PB
              </span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}