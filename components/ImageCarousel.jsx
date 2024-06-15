"use client"
import React, { useState } from 'react';

function ImageCarousel({ images, currentIndex, setCurrentIndex }) {

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="controls-carousel" className="relative w-full justify-center" data-carousel="static">
      <div className="relative flex  justify-center items-center min-h-96 overflow-hidden">
      {images.map((image, index) => (
          <div
            key={index}
            className={`absolute flex justify-center items-center w-full transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img
              src={image.url}
              className="max-h-96 h-auto object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>


      <button className="absolute top-0 z-30 flex items-center justify-start h-full px-4 cursor-pointer group focus:outline-none"
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

        <button className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
  );
}

export default ImageCarousel;
