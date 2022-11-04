import ItemDetail from "../carrito/itemDetail";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {productsId} = useParams();

    const SearchProducts = async () => {
        try {
            const response = await fetch(`/elements.json`);
            const data = await response.json();
            setProduct(data[productsId]);
        }
        catch (err) {
            console.log(err)
        }
        }
        useEffect(() => {
            SearchProducts();
        }, [])

    return (
        <>
            <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer;
