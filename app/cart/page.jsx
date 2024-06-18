"use client"
import { useState } from "react";
import CartSummary from "@/components/CartSummary";
import PaymentMethod from '@/components/PaymentMethod';
import ShippingMethod from '@/components/ShippingMethod';

function ComponentCarousel() {
  const components = [<CartSummary />, <PaymentMethod />, <ShippingMethod />];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow relative w-full overflow-y-auto">
        <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {components.map((Component, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              {Component}
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 flex justify-between p-4 bg-gray-200">
        <button
          type="button"
          className={`bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium p-2 rounded ${currentIndex === 0 ? 'opacity-0' : ''}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Anterior
        </button>
        {currentIndex === components.length - 1 ? (
          <button
            type="button"
            className={`bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium p-2 rounded`}
            onClick={() => window.open("https://icons.getbootstrap.com/icons/shop/")}
          >
            Confirmar compra
          </button>
        ) : (
          <button
            type="button"
            className={`bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium p-2 rounded`}
            onClick={handleNext}
            disabled={currentIndex === components.length - 1}
          >
            Siguiente
          </button>

        )}
      </div>
    </div>
  );
}

export default ComponentCarousel;
