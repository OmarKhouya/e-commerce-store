import { Link } from "react-router-dom";
import styled from "styled-components";
import RatingStars from "./RatingStars";

const CardImg = styled.img`
    // height: 7rem;
    @media only screen and (max-width:767px) and (min-width:396px){
        height: auto;
    }
    @media only screen and (min-width:1214px){
        height: 9rem;
    }

`

const CardBody = styled.div`
    height: 10rem!important;

`

export default function ProductCard({prodData}) {

    const {id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images} = prodData
    return (
        <div className="col-lg-3 col-md-6 col-sm-4" key={id}>
            <div className="card my-2 shadow mx-2" style={{backgroundColor: "#BFEAF5",borderColor: "#91D8E4"}}>
                <Link className="card-header" to={`/${category}/${id}`}>
                    <CardImg src={thumbnail} alt="thumbnail" className="card-img-top"/>
                </Link>
                <CardBody className="card-body">
                    <h4 className="">{title}</h4>
                    <p className="m-0">{price} $ - <span className="text-decoration-line-through text-danger">{discountPercentage}%</span></p>
                    <div className="mt-1"><RatingStars rating={rating} /> ({rating})</div>
                    {/* <>
                        {stock > 0 ? <span className="text-success">in stock</span>:<span className="text-danger">out of stock</span>}
                    </> */}
                </CardBody>
                <div className="card-footer">
                    <Link className="btn w-100 btn-outline-light text-dark" to={`/${category}/${id}`} style={{borderColor:"#7A7A7A"}}>See more</Link>
                </div>
            </div>
        </div>
        
    )
}
