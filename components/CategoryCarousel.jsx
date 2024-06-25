"use client"
import React, { useEffect, useState } from 'react';
import FetchData from './FetchData';
import CardCategory from './CardCategory';

function CategoryCarousel() {
  const [categories, setCategories] = useState([]),
  [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await FetchData('sites/MLA/categories');

        const categoryDetails = await Promise.all(
          categoriesResponse.map(async (category) => {
            const details = await FetchData(`categories/${category.id}`);
            return { ...details, ...category };
          })
        );

        setCategories(categoryDetails);


      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };
    fetchCategories();
  }, []);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(categories.length / 5));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(categories.length / 5)) % Math.ceil(categories.length / 5));
  };

  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 4) {
    groupedCategories.push(categories.slice(i, i + 4));
  }

  return (
    <section id="controSls-carousel" className="relative h-auto px-[8rem] my-[4rem] w-full" data-carousel="static">
      <div className='pt-8'>
        <p className='w-full text-center text-xl font-medium'>Categorías</p>
        <div className="relative overflow-hidden flex items-center h-[30rem]">
          {groupedCategories.map((group, index) => (
            <div
              key={index}
              className={`absolute flex justify-center items-center w-full transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              {group.map((category, key) => (
                <div key={key}>
                  <CardCategory category={category} key={key} />
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

export default CategoryCarousel;
