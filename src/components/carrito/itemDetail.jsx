import { useParams, Link } from "react-router-dom";
import ItemCount from "./itemCount";

const ItemDetail = (products) => {
    const {productsId} = useParams();
    const {categoryId} = useParams();
                    return (
                        
                        <Link to={`/producto/${products.id}`}>
                        <div className="">
                            <div className="">
                                <img src={products.pictureUrl} alt={`Imagen de ${products.title}`} />
                                <h4>{products.title}</h4>
                                <p>{products.detail}</p>
                                <h4>${products.price}</h4>
                                <ItemCount/>
                            </div>
                        </div></Link>
                    )
                }
            


export default ItemDetail;

