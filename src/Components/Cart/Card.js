import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions";
import { Link } from "react-router-dom";

const Card = ({data,data2}) =>{
    
    const {id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images} = data

    const dispatch = useDispatch()

    const infos = data2.filter(d=> d.id === id)
    const Quantity = infos[0].quantity
    const removeItem = () =>{
        dispatch(removeFromCart(id))
    }

    return (
        <div className="border border-dark px-3 py-4 my-3 rounded">
            <div className="d-flex justify-content-between text-center">
                <Link to={`/${category}/${id}`} className="card-img w-50">
                    <img src={thumbnail} alt="thumbnail" className="" style={{height: "10rem"}} />
                </Link>
                <div>
                    <p>{title}</p>
                    <p>{brand}</p>
                    <p>{price} $</p>
                    <p>Quantity : {Quantity}</p>

                </div>
                <div>
                    <button className="btn btn-outline-danger m-auto" onClick={removeItem}>remove <MdRemoveShoppingCart /></button>
                </div>
            </div>
        </div>
    )

}

export default Card