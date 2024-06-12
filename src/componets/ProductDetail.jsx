import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetail = (props) => {
    const [productDescription, setProductDescription] = useState();

    useEffect(() => {
        getDescription();
    }, [])

    const getDescription = async () => {
        try {
            const descriptionResponse = await axios.get(`https://api.mercadolibre.com/items/${props.item.id}/description`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = descriptionResponse.data;
            setProductDescription(data.plain_text);
        } catch (error) {
            console.error("An error has occurred while fetching item's description", error);
        }
    }

    return (
        <section className="container bg-white flex justify-center">
            <div className="w-9/12 ">
                <div className="flex p-20">
                    <div className="w-2/3 flex justify-center border-b border-b-gray-300 p-5 m-4">
                        <img src={props.item.pictures[0].url} />
                    </div>
                    <div className="w-1/3 flex flex-col items-start text-black border rounded-lg border-gray-300 p-5">
                        <div>
                            {props.item.condition === "new" && <p className="text-gray-400 text-sm">Nuevo</p>}
                            <h1 className="text-start text-1xl font-medium my-2">{props.item.title}</h1>
                            <p className="line-through">{props.item.base_price > props.item.price && props.item.base_price}</p>
                            <h1 className="text-3xl font-light">$ {props.item.price}</h1>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
                <div className="container">
                    <p>
                        {productDescription && productDescription}
                    </p>
                </div>
            </div>
        </section>
    )

}

export default ProductDetail;