
const ShoppingCart = () => {

    return (
        <section className="p-5">
            <div className="shadow-md border border-gray-100">
                <div className="p-20">
                    <div className="border-b border-b-gray-200">
                        <button className="text-center p-4 w-1/6 text-blue-600 font-medium border-b border-b-2 border-b-blue-600">Carrito </button>
                    </div>
                    <div className="border-b border-b-gray-200 flex justify-between items-center pb-10">
                        <div className="flex items-center">
                            <div className="p-5">
                                <img className="h-20 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9cxMwVY4GcCcEMMaqfM-9tQZziAsoDvgIw&s"></img>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <h2 className="font-medium text-xl">Copas de Champagne</h2>
                                </div>
                                <div className="flex gap-3 text-blue-600 text-sm">
                                    <a href="">Eliminar</a>
                                    <a href="">Más productos del vendedor</a>
                                    <a href="">Comprar ahora</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center max-w-[8rem] border border-gray-200">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="1" required />
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 -e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                        <h2 className="text-2xl">$ 6.000</h2>
                    </div>
                    <div className="border-b border-b-gray-200 flex items-center py-10 gap-10 text-xl justify-end">
                        <h2>Total con envío</h2>
                        <h2>$ 7.554</h2>
                    </div>
                    <div className="flex justify-end mt-10">
                        <button className="rounded-md bg-blue-500 text-white p-3 px-10 hover:bg-blue-400 transition-all	">
                            Finalizar compra
                        </button>
                    </div>
                </div>



            </div>
        </section>
    )

}

export default ShoppingCart;