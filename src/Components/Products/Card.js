import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export default function ProductCard({prodData}) {

    const {id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images} = prodData
    return (
        <div className="col-lg-3 col-md-4 col-sm-12 h-auto" key={id}>
            <div className="card my-2">
                <div className="card-header">
                    <img src={thumbnail} alt="thumbnail" className="card-img-top" />
                </div>
                <div className="card-body">
                    <h1>{title}</h1>
                    <p>brand : {brand}</p>
                    <p>about : {description}</p>
                </div>
                <div className="card-footer">
                    <p>{price} $ - <span className="text-decoration-line-through text-danger">{discountPercentage}</span><span className=" text-danger">%</span></p>
                    <p>rating {rating}</p>
                    <p>stock {stock}</p>
                    <Link className="btn btn-primary" to={`/${category}/${id}`}>See more</Link>
                </div>
            </div>
        </div>
        
    )
}
