import React from 'react'

function CardLoading() {
  return (
    <article className='p-5'>
      <div class="bg-white rounded-lg px-4 pb-4 flex flex-col justify-evenly h-auto min-h-[375px] xl:w-[19rem] lg:w-[25rem] w-[30rem] cursor-wait shadow-lg hover:shadow-xl">
        <div class="rounded-lg animate-pulse bg-gray-300 h-[13rem] w-auto"></div>
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-gray-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-gray-300 rounded col-span-2"></div>
                <div class="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardLoading