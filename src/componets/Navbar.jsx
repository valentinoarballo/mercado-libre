import { useState } from "react";


const Navbar = ({ searchInput, handleSearch, handleKeyUp, }) => {

  const [navbarMenuHidden, setNavbarMenuHidden] = useState(true);

  return (
    <nav className="bg-yellow-400">
      <div className="justify-evenly w-screen-xl flex flex-wrap items-center p-4">
        <a href="#">
          <img src="/images/logo.png" className="h-8" alt="Mercado Libre Logo" />
        </a>
        <div>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="searchBar"
              value={searchInput}
              onChange={handleSearch}
              onKeyUp={handleKeyUp}
              className="block w-full p-2 px-10 ps-10 pr-40 text-lg text-gray-900 border border-gray-400 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Buscar productos, marcas y más..."
            />
          </div>
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden transition hover:transition text-gray-600 hover:text-gray-500 p-2.5 me-1">
            <svg width="25" height="25" fill="currentColor" className="bi bi-cart2 cursor-pointer" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </button>
          <button onClick={() => setNavbarMenuHidden(!navbarMenuHidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden transition hover:transition text-gray-600 hover:text-gray-500 p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="hidden hover:transition transition sm:flex text-gray-800 hover:text-gray-600">
          <svg width="25" height="25" fill="currentColor" className="bi bi-cart2 cursor-pointer" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
        </button>
        <div className={navbarMenuHidden ? 'hidden' : "items-center justify-between w-full md:flex md:w-auto md:order-1"} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              id="searchBar"
              value={searchInput}
              onChange={handleSearch}
              onKeyUp={handleKeyUp}
              className="w-full p-2 px-10 text-lg text-gray-900 border border-gray-400 bg-gray-50" placeholder="Buscar productos, marcas y más..."
            />
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;