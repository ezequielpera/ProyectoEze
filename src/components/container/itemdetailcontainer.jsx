import ItemDetail from "../carrito/itemDetail";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);

    const {productsId} = useParams();
    const {categoryId} = useParams();

    const SearchProducts = async () => {
        try {
            const response = await fetch(`/elements.json/`);
            const data = await response.json();
            setProducts(data);
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
            <ItemDetail products={products}/>
        </>
    )
}

export default ItemDetailContainer;