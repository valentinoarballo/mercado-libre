
function CardProduct(item) {

  return (
    <>
      <div key={key} className='bg-white m-5  rounded-lg p-5 flex flex-col w-96 hover:cursor-pointer shadow-lg hover:shadow-xl'>
        <img className='p-5' src={item.thumbnail} alt={item.thumbnail_id} />
        <p className='text-blue-400 text-xl'>{item.title}</p>
        <div className='flex items-center gap-5'>
          <p className='text-gray-800 text-start text-3xl'>${item.price}</p>
          <p className='text-green-500 text-start text-lg'>40% OFF</p>
        </div>
        {item.shipping.free_shipping && <p className='text-green-600 text-start text-lg'>Envio gratis</p>}
      </div>
    </>
  )
}

export default CardProduct

// Object { id: "MLA1428713441", title: "Notebook Asus X515 Core I7 1165g7 24gb Ssd 1tb 15.6 Fhd Cts Color Slate Gray", condition: "new", thumbnail_id: "736364-MLA71084637482_082023", catalog_product_id: "MLA26080905", listing_type_id: "gold_pro", permalink: "https://www.mercadolibre.com.ar/notebook-asus-x515-core-i7-1165g7-24gb-ssd-1tb-156-fhd-cts-color-slate-gray/p/MLA26080905", buying_mode: "buy_it_now", site_id: "MLA", category_id: "MLA1652", … }
// ​
// accepts_mercadopago: true
// ​
// attributes: Array(10) [ {…}, {…}, {…}, … ]
// ​
// available_quantity: 1
// ​
// buying_mode: "buy_it_now"
// ​
// catalog_listing: true
// ​
// catalog_product_id: "MLA26080905"
// ​
// category_id: "MLA1652"
// ​
// condition: "new"
// ​
// currency_id: "ARS"
// ​
// differential_pricing: Object { id: 35713292 }
// ​
// discounts: null
// ​
// domain_id: "MLA-NOTEBOOKS"
// ​
// id: "MLA1428713441"
// ​
// installments: Object { quantity: 12, amount: 102499.17, rate: 0, … }
// ​
// inventory_id: "NUOM61319"
// ​
// listing_type_id: "gold_pro"
// ​
// official_store_id: null
// ​
// order_backend: 50
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
