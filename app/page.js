"use client"
import React, { useState, useEffect, Fragment } from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCarousel from '@/components/ProductCarousel';
import CategoryCarousel from '@/components/CategoryCarousel';
import Footer from '@/components/Footer';
import Spinner from '@/components/Spinner';

const Home = () => {
  const [interestCategory, setInterestCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    'https://http2.mlstatic.com/D_NQ_622369-MLA76685820810_062024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_717470-MLA76718061934_062024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_731920-MLA76993383639_062024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_835121-MLA76640320666_062024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_905292-MLA76622683430_062024-OO.webp'
  ];

  const getLastSearch = (search) => {
    try {
      const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      if (searchHistory.length === 0) return null;
      return searchHistory[searchHistory.length - search];
    } catch (error) {
      console.error('Error al obtener la última búsqueda del local storage:', error);
      return null;
    }
  };

  useEffect(() => {
    const lastSearch = getLastSearch(1);
    setInterestCategory(lastSearch);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen items-center flex justify-center" role="status">
        <Spinner size='20' />
      </div>
    );
  }

  const carousels = [
    ...(interestCategory ? [
      { title: "Basado en tus búsquedas recientes", endpoint: getLastSearch(1) },
      { title: "Basado en tus intereses", endpoint: getLastSearch(2) }
    ] : []),
    { title: "Mas vendidos de notebooks gamers", endpoint: "notebook gamer rog" },
    { title: "Mas vendidos en bicis", endpoint: "bicicleta" },
    { title: "Los termos mas vendidos", endpoint: "termo mate" },
    { title: "Adidas oficial", endpoint: "Zapatillas adidas" },
    { title: "Deportes", endpoint: "futbol" },
    { title: "Hogar, Muebles y Jardín", endpoint: "Hogar, Muebles y Jardín" },
  ];

  return (
    <div>
      <div className='animate-fade-right animate-once animate-duration-500 animate-ease-in-out'>
        <HeroCarousel images={images} />
      </div>

      {carousels.map((carousel, index) => (
        <div key={index} className={`animate-fade-left animate-duration-[800ms] animate-once animate-ease-in-out`}>
          <ProductCarousel
            title={carousel.title}
            endpointCarousel={carousel.endpoint}
            total={0}
            offset={0}
            limit={20}
          />
        </div>
      ))}

      <CategoryCarousel />

      <Footer />
    </div>
  );
};

export default Home;
