import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    function Sumar() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function Restar() {
        if (count > 1) {
            setCount(count - 1);
        }

    };
    return (
        <div>
            <div className="d-flex justify-content-center">
                <button className="botonesCount" onClick={Restar}>-</button>
                <div className="botonesCount">
                    <p>{count}</p>
                </div>
                <button className="botonesCount" onClick={Sumar}>+</button>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <button className="botonesCount" onClick={() => { onAdd(count) }}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )


}

export default ItemCount;
