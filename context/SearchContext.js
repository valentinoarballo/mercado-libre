import React, { createContext, useState, useEffect, useContext } from 'react';
import FetchData from '@/components/FetchData';
import { useRouter } from 'next/navigation';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [paging, setPaging] = useState({ total: 0, offset: 0, limit: 50 });
  const [cartProductsQuantity, setCartProductsQuantity] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const endpoint = `sites/MLA/search?q=${terminoBusqueda}&limit=${paging.limit}&offset=${paging.offset}`;
        const response = await FetchData(endpoint);
        response.results.map(async (item) => {
          const endpoint = `items/${item.id}`;
          const data = await FetchData(endpoint);
          item.thumbnail = data.pictures[0].url
        })
        setTimeout(() => setArticles(response.results), 1000)
        setPaging(response.paging);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    };

    if (terminoBusqueda) {
      cargarDatos();
    }
    try {
      setCartProductsQuantity(JSON.parse(localStorage.getItem("cartProducts")).length);
    } catch {
      setCartProductsQuantity(null)
    }

  }, [terminoBusqueda, paging.offset]);


  const saveSearchToLocalStorage = (searchTerm) => {
    try {
      let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      searchHistory.push(searchTerm);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } catch (error) {
      console.error('Error al guardar la búsqueda en el local storage:', error);
    }
  };


  const handleKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      setTerminoBusqueda(searchInput);
      saveSearchToLocalStorage(searchInput);
      router.push('/search');
    }
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleNextPage = () => {
    setPaging((prev) => ({ ...prev, offset: prev.offset + prev.limit }));
  };

  const handlePrevPage = () => {
    setPaging((prev) => ({ ...prev, offset: Math.max(0, prev.offset - prev.limit) }));
  };

  return (
    <SearchContext.Provider value={{
      articles, searchInput, handleSearch, handleKeyUp,
      paging, handleNextPage, handlePrevPage, cartProductsQuantity,
      setCartProductsQuantity
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
