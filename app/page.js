"use client"
import React, { useState, useEffect } from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCarousel from '@/components/ProductCarousel';
import CategoryCarousel from '@/components/CategoryCarousel';

const Home = () => {
  const [interestCategory, setInterestCategory] = useState(null);

  const images = [
    'https://http2.mlstatic.com/D_NQ_622369-MLA76685820810_062024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_717470-MLA76718061934_062024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_731920-MLA76993383639_062024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_835121-MLA76640320666_062024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_905292-MLA76622683430_062024-OO.webp'
  ];

  const getLastSearch = () => {
    try {
      const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      if (searchHistory.length === 0) return null;
      return searchHistory[searchHistory.length - 1];
    } catch (error) {
      console.error('Error al obtener la última búsqueda del local storage:', error);
      return null;
    }
  };

  useEffect(() => {
    const lastSearch = getLastSearch();
    setInterestCategory(lastSearch);
  }, []);

  return (
    <div>
      <HeroCarousel images={images} />
      
      {interestCategory ? (
        <ProductCarousel
          title={"Basado en tus búsquedas recientes"}
          endpointCarousel={interestCategory}
          total={0}
          offset={0}
          limit={20}
        />
      ) : (
        <section></section>
      )}

      <ProductCarousel
        title={"Mas vendidos de notebooks gamers"}
        endpointCarousel={"notebook gamer rog"}
        total={0}
        offset={0}
        limit={20}
      />

      <CategoryCarousel />

      <ProductCarousel
        title={"Mas vendidos en bicis"}
        endpointCarousel={"bicicleta"}
        total={0}
        offset={0}
        limit={20}
      />

    </div>
  );
};

export default Home;
