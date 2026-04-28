import React, { useCallback, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const galleryData: GalleryItem[] = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  src: `/imagem${index + 1}.jpeg`,
  alt: `Imagem ${index + 1}`,
}));

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const totalPages = useMemo(() => {
    return Math.ceil(galleryData.length / itemsPerPage);
  }, []);

  const currentPage = useMemo(() => {
    return Math.floor(currentIndex / itemsPerPage);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsPerPage;
      return nextIndex >= galleryData.length ? 0 : nextIndex;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - itemsPerPage;
      return prevIndex < 0 ? (totalPages - 1) * itemsPerPage : prevIndex;
    });
  }, [totalPages]);

  const goToPage = useCallback((page: number) => {
    setCurrentIndex(page * itemsPerPage);
  }, []);

  return (
    <section id="galeria" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Galeria</h2>
          <div className="w-20 h-1 bg-[#cf2c53] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(-${currentPage * 100}%, 0, 0)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-3 px-3"
                >
                  {galleryData
                    .slice(
                      pageIndex * itemsPerPage,
                      pageIndex * itemsPerPage + itemsPerPage
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        className="h-[400px] overflow-hidden rounded-3xl shadow-md bg-gray-100 mx-3"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-20 transition-all bg-white text-gray-600 hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-20 transition-all bg-white text-gray-600 hover:scale-110 active:scale-95"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-3 rounded-full transition-all duration-300 
                ${currentPage === i ? 'w-10 bg-[#cf2c53]' : 'w-3 bg-gray-200 hover:bg-gray-300'}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://www.instagram.com/institutoamorecuidar/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              bg-[#cf2c53] text-white px-14 py-4 rounded-2xl
              font-bold text-xl shadow-lg active:scale-95 transition-all
              hover:bg-gradient-to-r hover:from-white hover:to-gray-100
              hover:text-[#cf2c53] hover:border hover:border-[#cf2c53]
            "
          >
            <Instagram size={24} />
            Veja mais nas nossas redes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;