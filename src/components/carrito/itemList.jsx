import React, { useEffect, useState } from 'react';
import Item from './item';

import "./css/estilos.css";
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const buscarProductos = async () => {
            try {
                const response = await fetch('/elements.json');
                const data = await response.json();
                let productosFiltrados = data.filter(prod => prod.category === categoryId);
                if (productosFiltrados) {
                    setProductos(productosFiltrados);
                }
                if (productosFiltrados == "") {
                    setProductos(data);
                }
            }
            catch (err) {
                console.log(err);
            }
        }

        buscarProductos();
    }, [categoryId])

    return (
        <Item products={productos} />
    )
}

export default ItemList;
