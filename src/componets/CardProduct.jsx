
function CardProduct({ item, itemKey }) {
  if (item.original_price && item.original_price !== 0 ) {
    item.discounts = Math.round((item.original_price - item.price) * 100 / item.original_price)
  } else {
    item.discounts = false 
  }

  return (
    <div key={itemKey} className='bg-white m-3 rounded-lg px-4 pb-4 flex flex-col xl:w-[19rem] lg:w-[25rem] w-[30rem] hover:cursor-pointer shadow-lg hover:shadow-xl hover:text-blue-400'>

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
    </div>
  )
}

export default CardProduct

// Object { id: "MLA1428713441", title: "Notebook Asus X515 Core I7 1165g7 24gb Ssd 1tb 15.6 Fhd Cts Color Slate Gray", condition: "new", thumbnail_id: "736364-MLA71084637482_082023", catalog_product_id: "MLA26080905", listing_type_id: "gold_pro", permalink: "https://www.mercadolibre.com.ar/notebook-asus-x515-core-i7-1165g7-24gb-ssd-1tb-156-fhd-cts-color-slate-gray/p/MLA26080905", buying_mode: "buy_it_now", site_id: "MLA", category_id: "MLA1652", … }
// ​
// ​
// condition: "new"
// ​
// differential_pricing: Object { id: 35713292 }
// ​
// discounts: null
// ​
// original_price: null
// ​
// permalink: "https://www.mercadolibre.com.ar/notebook-asus-x515-core-i7-1165g7-24gb-ssd-1tb-156-fhd-cts-color-slate-gray/p/MLA26080905"
// ​
//              price: 1229990
// ​
// promotions: Array []
// ​
// sale_price: null
// ​
// seller: Object { id: 114076756, nickname: "HF TECNOLOGIA" }
// ​
//              shipping: Object { store_pick_up: false, free_shipping: true, logistic_type: "xd_drop_off", … }
// ​
// site_id: "MLA"
// ​
// stop_time: "2044-05-20T04:00:00.000Z"
// ​
//                thumbnail: "http://http2.mlstatic.com/D_736364-MLA71084637482_082023-I.jpg"
// ​
//                thumbnail_id: "736364-MLA71084637482_082023"
// ​
//                  title: "Notebook Asus X515 Core I7 1165g7 24gb Ssd 1tb 15.6 Fhd Cts Color Slate Gray"
// ​
// use_thumbnail_id: true
// ​
// winner_item_id: null
// ​
// <prototype>: Object { … }
// CardProduct.jsx:43:34
