import React from 'react'
import CartProduct from "@/components/CartProduct";
import { useEffect, useState } from "react";

function CartSummary() {
  const [cartProductsInfo, setCartProductsInfo] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartProductsInfoLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
    setCartProductsInfo(cartProductsInfoLocalStorage);
  }, [])

  const addPrice = (price) => {
    setTotal(prevTotal => prevTotal + price);
  }

  return (
    <section className="p-5">
      <div className="shadow-md border border-gray-100">
        <div className="p-20">
          <div className="border-b border-b-gray-200">
            <button className="text-center p-4 w-1/6 text-blue-600 font-medium border-b-2 border-b-blue-600">Carrito </button>
          </div>
          {cartProductsInfo && cartProductsInfo.length > 0 ? cartProductsInfo.map((cartProduct, index) => {
            return <CartProduct key={index} id={cartProduct.id} addPrice={addPrice} quantity={cartProduct.quantity}></CartProduct>;
          }) : <h2 className="text-center pt-20 text-gray-800 font-medium text-2xl">No tienes productos en el carrito aún, ¡Sigue navegando!</h2>
          }
          <div className={cartProductsInfo && cartProductsInfo.length === 0 ? "hidden" : "flex items-center pt-10 gap-10 text-2xl justify-end"}>
            <p>Total:</p>
            <p>$ {total.toLocaleString("es-AR")}</p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default CartSummary