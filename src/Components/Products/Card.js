// Importing necessary React components and styling
import { Link } from "react-router-dom";
import styled from "styled-components";
import RatingStars from "./RatingStars";

// Styled component for the card image
const CardImg = styled.img`
  @media only screen and (max-width: 767px) and (min-width: 396px) {
    height: auto;
  }
  @media only screen and (min-width: 1214px) {
    height: 10rem;
  }
`;

// Styled component for the card body
const CardBody = styled.div`
  height: 8rem !important;
`;

// Functional component for the Product Card
export default function ProductCard({ prodData }) {
  // Destructuring product data
  const {
    id,
    title,
    price,
    discountPercentage,
    rating,
    category,
    thumbnail,
  } = prodData;

  // Rendering the product card
  return (
    <div className="col-lg-3 col-md-5 col-sm-4 h-100" key={id}>
      <div
        className="card my-2 shadow mx-2 rounded"
        style={{ backgroundColor: "#B9EDDD" }}
      >
        {/* Link to the product details page */}
        <Link className="card-header" to={`/${category}/${id}`}>
          {/* Product thumbnail image */}
          <CardImg src={thumbnail} alt="thumbnail" className="card-img-top" />
        </Link>
        {/* Card body with product details */}
        <CardBody className="card-body">
          {/* Product title */}
          <h4 className="">{title}</h4>
          {/* Product price and discount */}
          <p className="m-0">
            {price} $ -{" "}
            <span className="text-decoration-line-through text-danger">
              {discountPercentage}%
            </span>
          </p>
          {/* Product rating */}
          <div className="mt-1">
            <RatingStars rating={rating} /> ({rating})
          </div>
        </CardBody>
        {/* Buy now button */}
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