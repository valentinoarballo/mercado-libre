"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import FetchData from "./FetchData";
import ImageCarousel from "./ImageCarousel";
import ProductCarousel from "./ProductCarousel";

const ProductDetail = (props) => {
  const [productDescription, setProductDescription] = useState(),
    [itemInfo, setItemInfo] = useState(),
    [interestCategory, setInterestCategory] = useState(null),
    [selectedImage, setSelectedImage] = useState(0),
    [selectedQuantity, setSelectedQuantity] = useState(1),
    [dropdownQuantity, setDropdownQuantity] = useState(false),
    [sellerInfo, setSellerInfo] = useState(),
    [sizes, setSizes] = useState();

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
    try {
      let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
      cartProducts.push({ id: itemInfo.id, quantity: selectedQuantity });
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      router.push("/cart");
    } catch (error) {
      console.error('Error al guardar la búsqueda en el local storage:', error);
    }
  };

  const handleAddProductToCart = async () => {
    try {
      let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
      const productExists = cartProducts.some(product => product.id === itemInfo.id);
      if (!productExists) {
        cartProducts.push({ id: itemInfo.id, quantity: selectedQuantity });
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      }
    } catch (error) {
      console.error('Error al guardar la búsqueda en el local storage:', error);
    }
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
    <>
      <section className="bg-white flex justify-center pt-5 pb-20">
        <div className="container w-3/4 flex items-start">

          {itemInfo && (
            <div className="flex flex-col justify-center items-center">
              {itemInfo.pictures.map((image, index) => (
                <>
                  {index < 4 && <img key={index} onClick={() => setSelectedImage(index)} onMouseEnter={() => setSelectedImage(index)} className={`p-1 my-2 border rounded-xl w-auto h-auto max-h-[4rem] max-w-[4rem] hover:cursor-pointer hover:border-blue-300 ${selectedImage == index ? "border-blue-300" : ""}`} src={image.url} />}
                </>
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

          <div className="w-2/3 flex flex-col items-center ">
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
          <div className="w-1/3 flex flex-col justify-between text-black border rounded-lg border-gray-300 p-5 gap-20">
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
                    <button onClick={()=>setSelectedQuantity(1)} className={`block ${selectedQuantity === 1 ? "border-l-4 border-blue-500 text-blue-500":""} font-semibold w-full text-start px-4 py-2 hover:bg-gray-100`}>{1} unidad</button>
                    {[...Array(5)].map((_, index) => (
                      <li key={index}>
                        <button onClick={()=>setSelectedQuantity(index+2)} className={`block ${selectedQuantity === index+2 ? "border-l-4 border-blue-500 text-blue-500":""} font-semibold w-full text-start px-4 py-2 hover:bg-gray-100`}>{index + 2} unidades</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button onClick={handleBuyNow} className="transition-all bg-blue-500 w-full hover:bg-blue-600 text-white py-3 px-4 rounded font-medium">Comprar ahora</button>
              <button onClick={handleAddProductToCart} className="transition-all bg-blue-200 w-full hover:bg-blue-300 text-blue-700 py-3 px-4 rounded font-medium">Agregar al carrito</button>
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
      </section>
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
    </>
  );
};

export default ProductDetail;
