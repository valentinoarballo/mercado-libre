"use client"
import { useEffect, useState } from "react";
import CartProduct from "@/components/CartProduct";

const ShoppingCart = () => {
  const [cartProductsInfo, setCartProductsInfo] = useState([]);
  const [total, setTotal] = useState(0);
  const [finishPurchaseDialogOpen, setFinishPurchaseDialogOpen] = useState(false);

  useEffect(() => {
    const cartProductsInfoLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
    setCartProductsInfo(cartProductsInfoLocalStorage);
  }, [])

  const addPrice = (price) => {
    setTotal(prevTotal => prevTotal + price);
  }

  const finishPurchase = () => {
    localStorage.setItem("cartProducts", "[]");
    setFinishPurchaseDialogOpen(false);
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }

  return (
    <section className="p-5">
      <div className="shadow-md border border-gray-100">
        <div className="p-20">
          <div className="border-b border-b-gray-200">
            <button className="text-center p-4 w-1/6 text-blue-600 font-medium border-b-2 border-b-blue-600">Carrito </button>
          </div>
          {cartProductsInfo && (cartProductsInfo.length > 0 ? cartProductsInfo.map((cartProduct, index) => {
            return <CartProduct key={index} id={cartProduct.id} addPrice={addPrice} amount={cartProduct.amount}></CartProduct>;
          }) : <h2 className="text-center pt-20 text-gray-800 font-medium text-2xl">No tienes productos en el carrito aún, ¡Sigue navegando!</h2>)
          }
          <div className={cartProductsInfo && (cartProductsInfo.length === 0 ? "hidden" : "border-b border-b-gray-200 flex items-center py-10 gap-10 text-xl justify-end")}>
            <h2>Total</h2>
            <h2>$ {total}</h2>
          </div>
          <div className="flex justify-end mt-10">
            <button onClick={() => {
              if (cartProductsInfo.length === 0) {
                return;
              }
              setFinishPurchaseDialogOpen(true)
            }} className="rounded-md bg-blue-500 text-white p-3 px-10 hover:bg-blue-400 transition-all	">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
      <div className={finishPurchaseDialogOpen ? "relative z-10" : "hidden"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">¿Seguro quieres finalizar tu compra?</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Si presionas "Finalizar" serás enviado a la pasarela de pagos para que los productos que elegiste sean tuyos. Ten en cuenta que el carrito de compras será vaciado.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" onClick={() => finishPurchase()} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Finalizar</button>
                <button type="button" onClick={() => setFinishPurchaseDialogOpen(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )

}

export default ShoppingCart;