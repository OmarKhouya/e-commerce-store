
import { useState } from "react"
import products from "../../data.json"
import RatingStars from "./RatingStars"
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ProductCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../../store/actions";

export default function Product() {
    
    const {identify} = useParams()
    const [range,setRange] = useState(1)

    const {id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images} = products.products[identify-1]

    const dispatch = useDispatch();
    const inCartIds = useSelector(state=>state.inCartIds.inCartIdentifies);

    const AddToCart = () =>{
        if(inCartIds.some(i=>i.id===id)){
            alert("Product already in CART!")
        }else{
            dispatch(addToCart({id:id,quantity:Number(range)}))
        }
    }

    return (
        <div className="mt-2">
            <div className="">
                <p className="text-center fs-1 mt-4">{title}</p>
                <p className="text-center fs-2 text-muted">{description}</p>
            </div>
            <div className="d-flex" style={{flexWrap: "wrap"}}>
                {/* Carrousel */}
                <div className="col-md-5 mx-auto">
                    <div id={`carouselProductImage${id}`} className="carousel slide carousel-fade shadow w-100">
                        <div className="carousel-inner rounded">
                            <div className="carousel-item active">
                                <img className="card-img-top" src={thumbnail} alt="Second slide" />
                            </div>
                            {
                                images.map(image => <div className="carousel-item card-img-top" key={image}><img className="" src={image} alt={image} style={{width: "inherit"}}/></div>)
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselProductImage${id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselProductImage${id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually">Next</span>
                        </button>
                    </div>
                </div>
                {/* data */}
                <div className="col col-md-6 m-auto">
                    <div className="text-center border rounded px-4 py-3 w-100">
                        <span className="fs-2 text-dark m-3">{price}<span className="fs-4 text-danger ">-{discountPercentage}%</span></span>
                        <div className="d-flex w-100 mt-3">
                            <span className="w-25 m-auto">Quantity : </span>
                            <input type="range" max={stock} className="form-control" onChange={(e)=>{setRange(e.target.value)}} value={range}/>
                            <span className="m-auto ps-3">{range}</span>
                        </div>
                        <div className="mt-3">
                            {stock > 0 ? `in stock :  ${stock}` : `not in stock`}
                        </div>
                        <div className="mt-3"><RatingStars rating={rating} /> ({rating})</div>
                        <div className="d-flex justify-content-evenly mt-3 w-100">
                            <button className="btn btn-outline-primary me-2" onClick={AddToCart}>Add to CART <FaCartPlus /></button>
                            <Link to={"/cart"} className="btn btn-outline-success">Go to CART <FaShoppingCart /></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* suggested items */}
            <p className="text-center fs-3 mt-3">More like this..</p>
            <div className="d-flex justify-content-center">
                <hr className="mx-4 w-50 " />
            </div>
            <div className="row justify-content-evenly">
                {products.products.filter(p=>p.category===category&&p.id !== id).slice(0,3).map((p,index)=><ProductCard prodData={p} key={index}/>)}
            </div>
        </div>
        
    )
}
