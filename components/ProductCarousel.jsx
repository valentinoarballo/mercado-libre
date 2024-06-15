"use client"
import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';
import FetchData from './FetchData';

function ProductCarousel({ title = "Nombre de la sección", endpointCarousel = "notebooks", total = 0, offset = 0, limit = 20 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articles, setArticles] = useState([]);
  const [paging, setPaging] = useState({ total, offset, limit });

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const endpoint = `sites/MLA/search?q=${endpointCarousel}&limit=${paging.limit}&offset=${paging.offset}`;
        const response = await FetchData(endpoint);
        setArticles(response.results);
        setPaging(response.paging);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    };
    cargarDatos();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(articles.length / 5));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(articles.length / 5)) % Math.ceil(articles.length / 5));
  };

  const groupedArticles = [];
  for (let i = 0; i < articles.length; i += 4) {
    groupedArticles.push(articles.slice(i, i + 4));
  }

  return (
    <section id="controls-carousel" className="relative h-auto px-[8rem] my-[4rem] w-full" data-carousel="static">
      <div className='bg-gray-200 shadow-inner rounded-xl pt-8'>
        <p className='absolute ml-10 text-xl font-medium'>{title}</p>
        <div className="relative overflow-hidden flex items-center h-[30rem]">
          {groupedArticles.map((group, index) => (
            <div
              key={index}
              className={`absolute flex justify-center items-center w-full transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              {group.map((item) => (
                <div key={item.id} className="p-2">
                  <CardProduct item={item} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <button className="absolute top-0 left-[10rem] z-30 flex items-center justify-start h-full px-4 cursor-pointer group focus:outline-none"
          type="button"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 group-hover:bg-gray-500/50 group-focus:ring-4 group-focus:ring-gray-300 group-focus:outline-none">
            <svg className="w-4 h-4 text-gray-700" aria-hidden="true" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button className="absolute top-0 right-[10rem] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          type="button"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 group-hover:bg-gray-500/50 group-focus:ring-4 group-focus:ring-gray-300 group-focus:outline-none">
            <svg className="w-4 h-4 text-gray-700" aria-hidden="true" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
}

export default ProductCarousel;
