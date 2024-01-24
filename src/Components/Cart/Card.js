import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getDataById, removeFromCart } from "../../store/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Card = ({ data, data2 }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = data;

  const dispatch = useDispatch();

  const product = useSelector((state) => state.prods.product);
  useEffect(() => {
    dispatch(getDataById(id));
  }, [dispatch, id]);
  const Quantity = product.quantity;
  const removeItem = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      className="px-3 py-4 mb-3 rounded"
      style={{ backgroundColor: "#BFEAF5", borderColor: "#91D8E4" }}
    >
      <div className="d-flex justify-content-between text-center">
        <Link to={`/${category}/${id}`} className="card-img w-50">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="rounded"
            style={{ height: "10rem" }}
          />
        </Link>
        <div>
          <p>{title}</p>
          <p>{brand}</p>
          <p>{price} $</p>
          <p>Quantity : {Quantity}</p>
        </div>
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
