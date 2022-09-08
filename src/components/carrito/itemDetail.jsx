import { useEffect, useState } from "react";

const ItemDetail = () => {
    const [products, setProducts] = useState([]);


    const SearchProducts = async () => {
        try {
            const response = await fetch(`/detail.json`);
            const data = await response.json();
            setProducts(data);
        }
        catch (err) {
            console.log(err)
        }
        }
        useEffect(() => {
            SearchProducts();
        }, [])

        return (
            products.map(product => {
                
                
                    return (
                        <div className="productsContainer">
                            <div className="product">
                                <img src={product.pictureUrl} alt={`Imagen de ${product.title}`} />
                                <h4>{product.title}</h4>
                                <p>{product.detail}</p>
                                <h4>${product.price}</h4>
                                <button >Agregar al carrito</button>
                            </div>
                        </div>
                    )
                }
            
            ));
    }


export default ItemDetail;

