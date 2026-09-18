import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

// Mapeamento automático para todas as 15 imagens da pasta public
const galleryData: GalleryItem[] = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  src: `/imagem${index + 1}.jpeg`,
  alt: `Momento ${index + 1} - Instituto Amor e Cuidar`,
}));

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsividade: define quantas imagens aparecem juntas na tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(galleryData.length / itemsPerPage);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(Math.max(0, totalPages - 1));
    }
  }, [itemsPerPage, totalPages, currentIndex]);

  return (
    <section 
      id="galeria" 
      className="py-24 bg-[url('/fundo3.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-pink-300 font-bold text-xs uppercase tracking-widest block mb-3 bg-white/10 w-fit px-3 py-1 rounded-full border border-white/20 backdrop-blur-xs">
              NOSSA GALERIA
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Momentos que <br />
              <span className="text-[#D82B65]">contam nossa história.</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/institutoamorecuidar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#D82B65] hover:bg-[#D82B65] hover:text-white px-6 py-2.5 rounded-full text-xs font-bold transition shadow-md self-start md:self-auto"
          >
            <Instagram size={16} />
            Veja mais no Instagram
          </a>
        </div>

        {/* ESTRUTURA DO CARROSSEL */}
        <div className="relative group">
          
          {/* CONTAINER DESLIZANTE */}
          <div className="overflow-hidden rounded-2xl py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {galleryData
                    .slice(
                      pageIndex * itemsPerPage,
                      pageIndex * itemsPerPage + itemsPerPage
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        className="h-72 rounded-2xl overflow-hidden shadow-lg bg-slate-900/40 border border-white/20 group/card relative"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover/card:scale-105 transition duration-500"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* BOTÃO ANTERIOR (SETA ESQUERDA) */}
          <button
            onClick={prevSlide}
            aria-label="Anterior"
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#0B0E3B] hover:bg-[#D82B65] hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 z-20 border border-pink-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* BOTÃO PRÓXIMO (SETA DIREITA) */}
          <button
            onClick={nextSlide}
            aria-label="Próximo"
            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#0B0E3B] hover:bg-[#D82B65] hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 z-20 border border-pink-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* INDICADORES / PONTINHOS DE NAVEGAÇÃO ABAIXO */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Página ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#D82B65]'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}