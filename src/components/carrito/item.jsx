import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../container/itemDetailContainer";
import './css/estilos.css';

const Item = ({products}) => {

    const [carrito, setCarrito] = useState([]);

    return (

        products.map(producto => {

            return (
                <div className="productsContainer" key={producto.id}>
                    <div className="product">
                        <img src={producto.pictureUrl} alt={`Imagen de ${producto.title}`} />
                        <h4>{producto.title}</h4>
                        <h4>${producto.price}</h4>

                        <Link className="botonesCount" to={`/detalle/${producto.id}`}>Ver Detalles</Link>

                    </div>
                </div>
            )
        }))


}

export default Item;