import React, { useEffect, useState } from "react";
import './css/estilos.css';

const Item = () => {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    const buscarProductos = async () => {
        try {
            const response = await fetch('elements.json');
            const data = await response.json();
            setProductos(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        buscarProductos();
    }, [])

    return (
        
        productos.map(producto => {
            
            return (

                <div className="productsContainer" key={producto.id}>
                    <div className="product">
                        <img src={producto.pictureUrl} alt={`Imagen de ${producto.title}`} />
                        <h4>{producto.title}</h4>
                        <h4>${producto.price}</h4>
                        <button onClick={() => {
                            setCarrito(...carrito, productos)
                        }}>Agregar al carrito</button>
                    </div>
                </div>
            )
        }))


}

export default Item;