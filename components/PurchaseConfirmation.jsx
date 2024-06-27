import React from 'react'
import { useSearch } from "@/context/SearchContext";

function PurchaseConfirmation() {
  const { setClientPurchase } = useSearch();
  return (
    <div
      id="toast-success"
      className="fixed right-0 left-0 top-0 bottom-0 z-50 flex items-center justify-center w-full bg-gray-900/20 transition-all animate-ease-in-out" 
      role="alert">
      <div className='relative animate-jump-in animate-duration-[750ms] bg-white p-8 rounded-lg flex flex-wrap justify-center items-center'>

        <header className='flex items-center justify-center pb-5 border-b w-full gap-10'>
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check Icon</span>
          </div>

          <p className='text-2xl font-medium'>¡Compra realizada con exito!</p>
        </header>

        <div className='flex w-full justify-center items-center py-5'>
          <p className="text-lg text-center font-normal">
            Gracias por confiar en nosotros
          </p>
        </div>

        <button
          onClick={() => setClientPurchase(false)}
          type="button"
          className="absolute top-5 right-5 ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
          aria-label="Close">
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>

      </div>
    </div>
  )
}

export default PurchaseConfirmation