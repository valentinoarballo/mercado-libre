"use client"

const CartProduct = ({ id, quantity, pictureUrl, title, price, sellerLink, setCartProductsData, cartProductsData }) => {

  const remove = () => {
    setCartProductsData(prevCartProductsData => [...prevCartProductsData.filter((product) => product.id !== id)])
    const cartProductsLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
    const cartProductsLocalStorageUpdated = cartProductsLocalStorage.filter((prod) => prod.id !== id);
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsLocalStorageUpdated));
  }

  const increaseDecreaseQuantity = (increase) => {
    if (!increase && quantity === 1) {
      return;
    }
    const callback = (product) => {
      if (product.id === id) {
        product.quantity += increase ? 1 : -1;
      }
      return product;
    }
    const cartProductsUpdated = cartProductsData.map(callback);
    setCartProductsData(cartProductsUpdated);
    const cartProductsLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
    const cartProductsLocalStorageUpdated = cartProductsLocalStorage.map(callback);
    localStorage.setItem("cartProducts",JSON.stringify(cartProductsLocalStorageUpdated));

  }

  return (
    <div className="border-b border-b-gray-200 flex justify-between items-center pb-10">
      <div className="flex items-center">
        <div className="p-5">
          <img className="h-20 " src={pictureUrl && pictureUrl}></img>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="font-medium text-xl">{title && title.slice(0, 35)}...</h2>
          </div>
          <div className="flex gap-3 text-blue-600 text-sm">
            <a className="cursor-pointer" onClick={remove}>Eliminar</a>
            <a href={sellerLink && sellerLink} target="_blank">Más productos del vendedor</a>
            <a href={"/search/" + id}>Ver producto</a>
          </div>
        </div>
      </div>
      <div className="flex items-center max-w-[8rem] border border-gray-200">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" onClick={() => { increaseDecreaseQuantity(false) }} className="hover:bg-gray-200 p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
          <svg className="w-3 h-3 text-gray-900" aria-hidden="true" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
          </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
          disabled value={quantity && quantity} required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" onClick={() => { increaseDecreaseQuantity(true) }} className="hover:bg-gray-200 -e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
          <svg className="w-3 h-3 text-gray-900" aria-hidden="true" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
          </svg>
        </button>
      </div>
      <h2 className="text-2xl price">$ {price && price.toLocaleString("es-AR")}</h2>
    </div>
  )

}

export default CartProduct;