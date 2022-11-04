import React from 'react';
import ItemCount from '../carrito/itemCount';
import ItemList from '../carrito/itemList';
import '../carrito/css/estilos.css'

const ItemListContainer = () => {

    return (
        <div>
                <div className="padreCards">
                    <ItemList />
                </div>
        </div>
    )
}

function Mostrar(a) {
    console.log(`Tenes ${a} productos en el carrito`);
}
export default ItemListContainer;
