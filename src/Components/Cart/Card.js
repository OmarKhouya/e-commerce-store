import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getDataById, removeFromCart } from "../../store/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Component for rendering an individual card in the shopping cart
const Card = ({ data }) => {
  // Destructuring data properties
  const {
    id,
    title,
    price,
    brand,
    category,
    thumbnail,
  } = data;

  // Redux dispatch hook
  const dispatch = useDispatch();

  // Fetch data for the current item on component mount
  useEffect(() => {
    dispatch(getDataById(id));
  }, [dispatch, id]);

  // Remove item from the shopping cart
  const removeItem = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      className="px-3 py-4 mb-3 rounded"
      style={{ backgroundColor: "#BFEAF5", borderColor: "#91D8E4" }}
    >
      <div className="d-flex justify-content-between text-center">
        {/* Link to the detailed product page */}
        <Link to={`/${category}/${id}`} className="card-img w-50">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="rounded"
            style={{ height: "10rem" }}
          />
        </Link>

        {/* Display item details */}
        <div>
          <p>{title}</p>
          <p>{brand}</p>
          <p>{price} $</p>
        </div>

        {/* Button to remove item from the cart */}
        <div>
          <button
            className="btn btn-outline-danger m-auto"
            onClick={removeItem}
          >
            remove <MdRemoveShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;