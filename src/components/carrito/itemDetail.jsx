import { Link } from "react-router-dom";
import ItemCount from "./itemCount";

const ItemDetail = ({ products }) => {
    return (
        <div className="" key={products.id}>
            <div className="">
                <img src={products.pictureUrl} alt={`Imagen de ${products.title}`} />
                <h4>{products.title}</h4>
                <p>{products.detail}</p>
                <h4>${products.price}</h4>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail;

