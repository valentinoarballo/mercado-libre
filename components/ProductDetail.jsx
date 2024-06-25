"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import FetchData from "./FetchData";
import ImageCarousel from "./ImageCarousel";
import ProductCarousel from "./ProductCarousel";
import { useSearch } from "@/context/SearchContext";

const ProductDetail = (props) => {
  const [productDescription, setProductDescription] = useState(),
    [itemInfo, setItemInfo] = useState(),
    [interestCategory, setInterestCategory] = useState(null),
    [selectedImage, setSelectedImage] = useState(0),
    [selectedQuantity, setSelectedQuantity] = useState(1),
    [dropdownQuantity, setDropdownQuantity] = useState(false),
    [sellerInfo, setSellerInfo] = useState(),
    [sizes, setSizes] = useState(),
    { setCartProductsQuantity } = useSearch(),
    [isProductInCart, setIsProductInCart] = useState(false),
    [isToastVisible, setIsToastVisible] = useState(false);


  const router = useRouter();
  const dropdownRef = useRef(null);

  const getLastSearch = () => {
    try {
      const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      if (searchHistory.length === 0) return null;
      return searchHistory[searchHistory.length - 2];
    } catch (error) {
      console.error('Error al obtener la última búsqueda del local storage:', error);
      return null;
    }
  };

  useEffect(() => {
    const lastSearch = getLastSearch();
    setInterestCategory(lastSearch);
  }, []);

  useEffect(() => {
    getItemInfo();
    getDescription();
  }, []);

  useEffect(() => {
    if (itemInfo) {
      getSellerInfo();
      getIsProductInCart();
    }
  }, [itemInfo]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownQuantity(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getIsProductInCart = () => {
    const cartProductsLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
    if (cartProductsLocalStorage) {
      if (cartProductsLocalStorage.length > 0) {
        const productInCart = cartProductsLocalStorage.find((product) => product.id === itemInfo.id) !== undefined;
        productInCart && setIsProductInCart(true);
      }
    } 
  }

  const getItemInfo = async () => {
    try {
      const endpoint = `items/${props.itemId}`;
      const data = await FetchData(endpoint);
      setItemInfo(data);
      getSizes(data);
    } catch (error) {
      console.error("An error has occurred while fetching item's description", error);
    }
  };

  const getDescription = async () => {
    try {
      const endpoint = `items/${props.itemId}/description`;
      const data = await FetchData(endpoint);
      setProductDescription(data.plain_text);
    } catch (error) {
      console.error("An error has occurred while fetching item's description", error);
    }
  };

  const getSellerInfo = async () => {
    try {
      const endpoint = `users/${itemInfo.seller_id}`;
      const data = await FetchData(endpoint);
      setSellerInfo({ nickname: data.nickname, link: data.permalink });
    } catch (error) {
      console.error("An error has occurred while fetching item's description", error);
    }
  };

  const handleBuyNow = async () => {
    addProductToCart();
    router.push("/cart");
  };

  const addProductToCart = async () => {
    try {
      let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
      const productExists = cartProducts.some(product => product.id === itemInfo.id);
      if (!productExists) {
        cartProducts.push({ id: itemInfo.id, quantity: selectedQuantity });
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        setCartProductsQuantity(cartProducts.length);
      }
    } catch (error) {
      console.error('An error has occurred while adding the product to local storage', error);
    }
  }

  const handleAddProductToCart = async () => {
    addProductToCart();
    setIsProductInCart(true);
    setIsToastVisible(true);
  };

  const getSizes = (item) => {
    let availableSizes = [];
    item.variations.map((variation) => {
      variation.attribute_combinations.map((atrComb) => {
        if (atrComb.id === "SIZE") {
          if (availableSizes.find((size) => size === atrComb.value_name) === undefined) {
            availableSizes.push(atrComb.value_name);
          }
        }
      });
    });
    setSizes(availableSizes);
  };

  return (
    <Fragment>
      {isToastVisible &&
        <div id="toast-success" className="fixed bottom-4 left-4 z-50 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white transition-all rounded-lg shadow-xl border border-gray-100" role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check Icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">Producto agregado al <a href="/cart" className="text-gray-700 font-semibold hover:underline">carrito</a> exitosamente.</div>
          <button onClick={() => setIsToastVisible(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>}
      <section className="bg-white flex justify-center pt-5 pb-20">
        {itemInfo ? (


          <div className="container w-3/4 flex items-start">

            {itemInfo && (
              <div className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in-out flex flex-col justify-center items-center">
                {itemInfo.pictures.map((image, index) => (
                  <Fragment key={index}>
                    {index < 4 && <img onClick={() => setSelectedImage(index)} onMouseEnter={() => setSelectedImage(index)} className={`p-1 my-2 border rounded-xl w-auto h-auto max-h-[4rem] max-w-[4rem] hover:cursor-pointer hover:border-blue-300 ${selectedImage == index ? "border-blue-300" : ""}`} src={image.url} />}
                  </Fragment>
                ))}

                {itemInfo.pictures.length == 5 && (
                  <img
                    onClick={() => setSelectedImage(4)}
                    onMouseEnter={() => setSelectedImage(4)}
                    className={`p-1 my-2 border rounded-xl w-auto h-auto max-h-[4rem] max-w-[4rem] hover:cursor-pointer hover:border-blue-300 ${selectedImage == 4 ? "border-blue-300" : ""}`}
                    src={itemInfo.pictures[4].url}
                  />
                )}

                {itemInfo.pictures.length > 5 && (
                  <div
                    onClick={() => setSelectedImage(4)}
                    onMouseEnter={() => setSelectedImage(4)}
                    className="relative p-1 my-2  rounded-xlw-auto h-auto max-h-[4rem] max-w-[4rem] flex items-center justify-center"
                  >
                    <img
                      src={itemInfo.pictures[4].url}
                      alt="Imagen 5"
                      className={`absolute cursor-pointer border p-1 my-2 rounded-xl w-auto h-auto max-h-[4rem] max-w-[4rem] flex items-center justify-center opacity-50 hover:border-blue-300 ${selectedImage > 4 ? "border-blue-300" : ""}`}
                    />
                    <p className="relative z-10 cursor-pointer font-bold">+{itemInfo.pictures.length - 4}</p>
                  </div>
                )}
              </div>
            )}

            <div className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in-out w-2/3 flex flex-col items-center ">
              {itemInfo && (
                <ImageCarousel images={itemInfo.pictures} currentIndex={selectedImage} setCurrentIndex={setSelectedImage} />
              )}
              <div className="w-4/5 border-t border-t-gray-300 ">
                <h2 className="text-3xl font-light my-5">Descripción</h2>
                <p className="text-xl text-gray-500">
                  {productDescription && productDescription}
                </p>
              </div>
            </div>

            <div className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in-out w-1/3 flex flex-col justify-between text-black border rounded-lg border-gray-300 p-5 gap-20">
              <div>
                <p className="text-gray-400 text-sm">{itemInfo && (itemInfo.condition === "new" ? "Nuevo" : itemInfo.condition === "used" ? "Usado" : "")}</p>
                <h1 className="text-start text-2xl font-medium my-2">{itemInfo && itemInfo.title}</h1>
                <p className="line-through text-gray-400">{itemInfo && itemInfo.base_price > itemInfo.price && "$ " + itemInfo.price}</p>
                <h1 className="text-4xl font-light">$ {itemInfo && itemInfo.price.toLocaleString("es-AR")}</h1>
                {itemInfo && itemInfo.shipping.free_shipping && <h3 className="mt-5 font-medium text-md text-green-600">Envío gratis</h3>}
              </div>

              <div className="w-full gap-2 flex flex-col">
                {sizes && sizes.length > 0 &&
                  <div className="flex flex-col">
                    <p>Talle:</p>
                    <div className="flex my-3 gap-2 flex-wrap">
                      {sizes && sizes.map((size, index) => {
                        return (
                          <div key={index} className="p-5 border border-gray-300 rounded-md">
                            <p className="text-sm">{size}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                }

                <div ref={dropdownRef}>
                  <button onClick={() => setDropdownQuantity(!dropdownQuantity)} className="text-md text-center inline-flex items-center" type="button">
                    Cantidad:
                    <p className="ml-2.5 font-medium">{selectedQuantity} unidades</p>
                    <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>

                  <div className={`z-10 ${dropdownQuantity ? "" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-sm border shadow-xl w-auto min-w-[15rem]`}>
                    <ul className="py-2 text-sm text-gray-700">
                      <button onClick={() => setSelectedQuantity(1)} className={`block ${selectedQuantity === 1 ? "border-l-4 border-blue-500 text-blue-500" : ""} font-semibold w-full text-start px-4 py-2 hover:bg-gray-100`}>{1} unidad</button>
                      {[...Array(5)].map((_, index) => (
                        <li key={index}>
                          <button onClick={() => setSelectedQuantity(index + 2)} className={`block ${selectedQuantity === index + 2 ? "border-l-4 border-blue-500 text-blue-500" : ""} font-semibold w-full text-start px-4 py-2 hover:bg-gray-100`}>{index + 2} unidades</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button onClick={handleBuyNow} className="transition-all bg-blue-500 w-full hover:bg-blue-600 text-white py-3 px-4 rounded font-medium">Comprar ahora</button>
                <button onClick={!isProductInCart && handleAddProductToCart} className={`transition-all w-full ${isProductInCart ? "bg-gray-200 text-gray-400 hover:none cursor-default" : "bg-blue-200 text-blue-700 hover:bg-blue-300 "}  py-3 px-4 rounded font-medium`}>{isProductInCart ? "¡Ya está en tu carrito!" : "Agregar al carrito"}</button>
                <p className="font-light text-sm mt-2">Vendido por <a className="text-blue-500" href={sellerInfo && sellerInfo.link}>{sellerInfo && sellerInfo.nickname}</a></p>
                <p className="text-gray-500 text-sm">
                  <svg width="16" height="16" fill="currentColor" className="bi bi-shield-check inline" viewBox="0 0 16 16">
                    <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                  </svg> <a className="text-blue-500" href="https://www.mercadolibre.com.ar/compra-protegida">Compra Protegida</a>, recibí el producto que esperabas o te devolvemos tu dinero.
                </p>
              </div>
            </div>

          </div>
        ) : (
          <div className="container w-3/4 h-[45rem] flex items-start cursor-wait">
            <div className="w-2/3 h-full flex flex-wrap px-20">
              <div className="rounded-lg flex flex-col w-full">
                <div className="rounded-lg animate-pulse bg-gray-300 h-[30rem] w-auto"></div>
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                <div className="h-2 w-[33rem] bg-gray-300 rounded col-span-2"></div>
              </div>
              <div className="h-2 w-full bg-gray-300 rounded"></div>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 w-[33rem] bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                  <div className="h-2 w-[33rem] bg-gray-300 rounded col-span-2"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
              <div className="h-2 w-full bg-gray-300 rounded"></div>
            </div>
            <div className="w-1/3 space-y-8 flex animate-pulse flex-wrap">
              <div className="h-20 w-full bg-gray-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 w-[20rem] bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                  <div className="h-2 w-[20rem] bg-gray-300 rounded col-span-2"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
              <div className="h-8 w-full bg-gray-300 rounded"></div>
            </div>
          </div>
        )}
      </section>
      <div className="animate-fade animate-once animate-duration-[1500ms] animate-ease-in-out">
        {itemInfo && (
          <ProductCarousel
            title={"Similar a este producto"}
            endpointCarousel={itemInfo.title}
            total={0}
            offset={0}
            limit={8}
          />
        )}

        {interestCategory ? (
          <ProductCarousel
            title={"Porque antes buscaste"}
            endpointCarousel={interestCategory}
            total={0}
            offset={0}
            limit={20}
          />
        ) : (
          <section></section>
        )}
      </div>
    </Fragment>
  );
};

export default ProductDetail;
