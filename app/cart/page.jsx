"use client"
import { useState } from "react";
import CartSummary from "@/components/CartSummary";
import PaymentMethod from '@/components/PaymentMethod';
import ShippingMethod from '@/components/ShippingMethod';
import CartConfirmation from '@/components/CartConfirmation';
import { useRouter } from 'next/navigation';

function ComponentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const router = useRouter();

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

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleShippingSelection = (method) => {
    setSelectedShippingMethod(method);
  };

  const updateShippingCost = (cost) => {
    setShippingCost(cost);
  };

  const updateCartTotal = (total) => {
    setCartTotal(total);
  };

  const finishPurchase = () => {
    localStorage.setItem("cartProducts", "[]");
    router.push("/");
  };

  const components = [
    <CartSummary updateCartTotal={updateCartTotal} updateShippingCost={updateShippingCost} />,
    <PaymentMethod onPaymentSelect={handlePaymentSelection} />,
    <ShippingMethod onShippingSelect={handleShippingSelection} />,
    <CartConfirmation paymentMethod={selectedPaymentMethod} shippingMethod={selectedShippingMethod} total={cartTotal} shippingCost={shippingCost} />
  ];

  let progress = ((currentIndex + 1) / components.length) * 100;

  return (
    <section className="flex flex-col h-screen">
      <div className={`w-full h-2 ${cartTotal == 0 && "hidden"}`}>
        <div
          className="h-full ease-in-out transition-all duration-[1500ms] bg-blue-400"
          style={{ width: `${progress}%` }}
        >
        </div>
      </div>

      <section className="flex-grow relative w-full overflow-x-hidden">
        <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {components.map((Component, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              {Component}
            </div>
          ))}
        </div>
      </section>

      <footer className={` ${cartTotal != 0 ? "sticky" : "hidden"} bottom-0 flex justify-between p-4 bg-gray-200`}>
        <button
          type="button"
          className={`bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium p-2 rounded ${currentIndex === 0 ? 'opacity-0' : ''}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Anterior
        </button>
        {currentIndex === components.length - 1 ? (

          selectedPaymentMethod && selectedShippingMethod ? (
            <button
              type="button"
              className={`bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium p-2 rounded`}
              onClick={finishPurchase}
            >
              Confirmar compra
            </button>
          ) : (
            <button
              type="button"
              className={`static bg-gray-400 cursor-not-allowed text-white text-lg font-medium p-2 rounded`}
              disabled
            >
              Confirmar compra
            </button>
          )

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
      </footer>
    </section >
  );
}

export default ComponentCarousel;
