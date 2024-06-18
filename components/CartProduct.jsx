"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const CartProduct = (props) => {
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(props.amount);
  const [hidden, setHidden] = useState(false);
  const [sellerLink, setSellerLink] = useState();

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    try {
      const productResponse = await axios.get(`https://api.mercadolibre.com/items/${props.id}`);
      const data = productResponse.data
      setProduct(data);
      props.addPrice(data.price * amount);
      setSellerLink("https://listado.mercadolibre.com.ar/_CustId_" + data.seller_id);
    } catch (error) {
      console.error(error);
    }
  }

  const remove = () => {
    setHidden(true);
    props.addPrice(parseInt("-" + (product.price * amount)));
    const cartProductsInfoLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
    const cartProductsInfoUpdated = cartProductsInfoLocalStorage.filter((prod) => prod.id !== product.id);
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsInfoUpdated));
  }


  const increaseDecreaseAmount = (increase) => {
    if (!increase && amount === 0) {
      return;
    }
    setAmount(amount + (increase ? 1 : -1));
    props.addPrice(increase ? product.price : parseInt("-" + product.price));
    const cartProductsInfoLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
    const cartProductsUpdated = cartProductsInfoLocalStorage.map((prod) => {
      if (prod.id === product.id) {
        prod.amount += (increase ? 1 : -1);
      } return prod;
    })
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsUpdated));
  }

  if (product) {
    return (
      <div className={hidden ? "hidden" : "border-b border-b-gray-200 flex justify-between items-center pb-10"}>
        <div className="flex items-center">
          <div className="p-5">
            <img className="h-20 " src={product.pictures[0].url}></img>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-medium text-xl">{product.title.slice(0, 35)}...</h2>
            </div>
            <div className="flex gap-3 text-blue-600 text-sm">
              <a className="cursor-pointer" onClick={remove}>Eliminar</a>
              <a href={sellerLink} target="_blank">Más productos del vendedor</a>
              <a href="">Ver producto</a>
            </div>
          </div>
        </div>
        <div className="flex items-center max-w-[8rem] border border-gray-200">
          <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" onClick={() => { increaseDecreaseAmount(false) }} className="hover:bg-gray-200 p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
            </svg>
          </button>
          <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
            disabled value={amount} required />
          <button type="button" id="increment-button" data-input-counter-increment="quantity-input" onClick={() => { increaseDecreaseAmount(true) }} className="hover:bg-gray-200 -e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl price">$ {product.price.toLocaleString("es-AR")}</h2>
      </div>
    )
  }
}

export default CartProduct;