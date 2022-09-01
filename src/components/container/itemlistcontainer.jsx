import React from 'react';
import ItemCount from '../carrito/itemCount';
import ItemList from '../carrito/itemList';

const ItemListContainer = () => {

    return (
        <div>
        <ItemCount stock={6} initial={1} onAdd={Mostrar} />
        <ItemList/>
        </div>
    )
    
}

function Mostrar(a) {
    console.log(`Tenes ${a} productos en el carrito`);
}
export default ItemListContainer;