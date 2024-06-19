import React from 'react'
import CartProduct from "@/components/CartProduct";
import { useEffect, useState } from "react";
import FetchData from './FetchData';

function CartSummary() {
  const [cartProductsData, setCartProductsData] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const cartProductsLocalStorage = await JSON.parse(localStorage.getItem("cartProducts"));
      const fetchedCartProducts = await Promise.all(
        cartProductsLocalStorage.map(async (product) => {
          const data = await FetchData(`items/${product.id}`);
          return { id: product.id, title: data.title, price: data.price, pictureUrl: data.pictures[0].url, sellerId: data.seller_id, quantity: product.quantity };
        })
      )
      setCartProductsData(fetchedCartProducts);
    }
    fetchCartProducts();
  }, [])

  const getTotal = () => {
    let sum = 0;
    cartProductsData.map((product) => sum += (product.price * product.quantity));
    return sum;
  }

  return (
    <section className="p-5">
      <div className="shadow-md border border-gray-100">
        <div className="p-20">
          <div className="border-b border-b-gray-200">
            <button className="text-center p-4 w-1/6 text-blue-600 font-medium border-b-2 border-b-blue-600">Carrito </button>
          </div>
          {cartProductsData && cartProductsData.length > 0 ? cartProductsData.map((cartProduct, index) => {
            return <CartProduct key={index} cartProductsData={cartProductsData} id={cartProduct.id} price={cartProduct.price} title={cartProduct.title} setCartProductsData={setCartProductsData}
              pictureUrl={cartProduct.pictureUrl} quantity={cartProduct.quantity} sellerLink={"https://listado.mercadolibre.com.ar/_CustId_" + cartProduct.sellerId}></CartProduct>;
          }) : <h2 className="text-center pt-20 text-gray-800 font-medium text-2xl">No tienes productos en el carrito aún, ¡Sigue navegando!</h2>
          }
          <div className={cartProductsData && cartProductsData.length === 0 ? "hidden" : "flex items-center pt-10 gap-10 text-2xl justify-end"}>
            <p>Total:</p>
            <p>$ {getTotal().toLocaleString("es-AR")}</p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default CartSummary