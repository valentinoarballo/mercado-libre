import React from 'react'

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.55/mercadolibre/logo_large_25years_v2.png" class="h-8" alt="Flowbite Logo" />
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a Target="_blank" href="https://github.com/nazabucciarelli" class="hover:underline me-4 md:me-6">Nazareno Bucciarelli</a>
            </li>
            <li>
              <a Target="_blank" href="https://github.com/valentinoarballo/" class="hover:underline me-4 md:me-6">Valentino Arballo</a>
            </li>
            <li>
              <a Target="_blank" href="https://github.com/valentinoarballo/mercado-libre" class="hover:underline me-4 md:me-6">Repositorio de github</a>
            </li>
            <li>
              <a Target="_blank" href="https://developers.mercadolibre.com.ar/es_ar/api-docs-es" class="hover:underline">API</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center">Esta es una página de compras falsa con la API de Mercado Libre.</span>
      </div>
    </footer>
  )
}

export default Footer