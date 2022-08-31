import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    function Sumar () {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function Restar () {
        if (count > 1) {
            setCount(count - 1);
        }

    };
    return (
        <div>
            <div className="d-flex justify-content-center">
                <button onClick={Restar}>-</button>
                <p>{count}</p>
                <button onClick={Sumar}>+</button>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <button onClick={()=> {onAdd(count)}}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )


}

export default ItemCount;
