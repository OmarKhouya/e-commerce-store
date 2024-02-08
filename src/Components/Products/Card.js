import { Link } from "react-router-dom";
import styled from "styled-components";
import RatingStars from "./RatingStars";

const CardImg = styled.img`
  // height: 7rem;
  @media only screen and (max-width: 767px) and (min-width: 396px) {
    height: auto;
  }
  @media only screen and (min-width: 1214px) {
    height: 14rem;
  }
`;

const CardBody = styled.div`
  height: 10rem !important;
`;

export default function ProductCard({ prodData }) {
  const {
    id,
    title,
    price,
    discountPercentage,
    rating,
    category,
    thumbnail,
  } = prodData;
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 h-100" key={id}>
      <div
        className="card my-2 shadow mx-2 rounded"
        style={{ backgroundColor: "#B9EDDD" /*  borderColor: "#E6A4B4"  */ }}
      >
        <Link className="card-header" to={`/${category}/${id}`}>
          <CardImg src={thumbnail} alt="thumbnail" className="card-img-top" />
        </Link>
        <CardBody className="card-body">
          <h4 className="">{title}</h4>
          <p className="m-0">
            {price} $ -{" "}
            <span className="text-decoration-line-through text-danger">
              {discountPercentage}%
            </span>
          </p>
          <div className="mt-1">
            <RatingStars rating={rating} /> ({rating})
          </div>
        </CardBody>
        <div className="p-3">
          <Link
            className="btn w-50 btn-outline-light text-dark"
            to={`/${category}/${id}`}
            style={{ borderColor: "#7A7A7A" }}
          >
            buy now
          </Link>
        </div>
      </div>
    </div>
  );
}
