import { Link } from "react-router-dom";
import ItemCount from "./itemCount";

const ItemDetail = ({ product }) => {
    return (
        <div key={product?.id}>
            <div className="contDetalle">
                <div className="divImagen">
                    <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                </div>
                <div className="contInfo">
                    <div className="divInfo">
                        <h4>{product?.title}</h4>
                        <p>{product?.detail}</p>
                        <h4>${product?.price}</h4>
                        <ItemCount stock={10} initial={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

