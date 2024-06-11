import React, { useState, useEffect } from 'react';
import './App.css'
import CardProduct from './componets/CardProduct'
import FetchData from './componets/FetchData';
import Navbar from './componets/Navbar'

function App() {

  const [articles, setArticles] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        var endpoint = `search?q=${terminoBusqueda}`
        const data = await FetchData(endpoint);
        setArticles(data.results);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    };
    cargarDatos();
  }, [terminoBusqueda]);

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      setTerminoBusqueda(searchInput)
    }
  };


  return (
    <div >
      <Navbar></Navbar>

      {/* <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          id="searchBar"
          type="search"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          onKeyUp={handleKeyUp}
          className="block w-full p-4 ps-10 text-sm border rounded-lg shadow-inner bg-gray-200 placeholder-gray-500 text-black focus:ring-blue-300 focus:border-blue-300"
          placeholder="busca pibe"
        />
      </div> */}

      <div className='flex flex-wrap w-full justify-center px-20'>
        {articles.map((item, key) => (
          <CardProduct item={item} key={key} />
        ))}
      </div>
    </div>
  )
}

export default App
