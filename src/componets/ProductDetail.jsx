
const ProductDetail = (props) => {

    return(
        <section className="container bg-white p-20">
            <div className="flex">
                    <div className="w-2/3 flex justify-center border-b border-b-gray-300 p-5">
                            <img src={props.item.pictures[0].url} />
                    </div>
                    <div className="w-1/3 flex flex-col justify-start items-start text-black">
                        {props.item.condition === "new" && <p className="text-gray-400 text-sm">Nuevo</p>}
                        <h1 className="text-start text-2xl font-semibold">{props.item.title}</h1>
                        <p className="line-through">{props.item.base_price > props.item.price && props.item.base_price}</p>
                        <h1 className="font-thin">$ {props.item.price}</h1>
                    </div>
            </div>
        </section>
    )

}

export default ProductDetail;