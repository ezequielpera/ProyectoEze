import React from 'react';
import ItemCount from '../carrito/itemCount';

const ItemListContainer = () => {

    return (
        <ItemCount stock={6} initial={1} onAdd={Mostrar} />
    )
}

function Mostrar(a) {
    console.log(`Tenes ${a} productos en el carrito`);
}
export default ItemListContainer;