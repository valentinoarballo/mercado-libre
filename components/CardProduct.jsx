
function CardProduct({ item, itemKey }) {
  if (item.original_price && item.original_price !== 0 ) {
    item.discounts = Math.round((item.original_price - item.price) * 100 / item.original_price)
  } else {
    item.discounts = false 
  }

  return (
    <a href={`/search/${item.id}`} key={itemKey} className='bg-white m-3 rounded-lg px-4 pb-4 flex flex-col h-auto min-h-[375px] xl:w-[19rem] lg:w-[25rem] w-[30rem] hover:cursor-pointer shadow-lg hover:shadow-xl hover:text-blue-400'>

      <div className="flex wrap flex-wrap w-full justify-center">
        <img className='h-[250px] w-auto' src={item.thumbnail} alt={item.thumbnail_id} />
        <p className='text-lg w-full'>{item.title.slice(0, 20)}...</p>
      </div>

      {item.discounts ? <p className='text-gray-800 text-start text-md line-through'>${item.original_price}</p> : "" }
      <div className='flex items-center gap-2'>
        <p className='text-gray-800 text-start text-3xl'>${item.price.toLocaleString("es-AR")}</p>
        {item.discounts ? <p className='text-green-500 text-start text-lg'>%{item.discounts} OFF</p> : ""}
      </div>
      {item.shipping.free_shipping && <p className='text-green-600 font-semibold text-start text-lg'>Envio gratis</p>}
      {item.condition != "new" && <p className='text-gray-600 text-start'>Usado</p>}
    </a>
  )
}

export default CardProduct