import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import DataDisplay from "./Layout/DataDisplay";
import ProductCard from "./Products/Card";
import Section from "./Layout/Section";
import { getAllData } from "../store/actions";

// Main component for displaying products on the main page
export default function Main() {
  // State for managing display settings
  const [display, setDisplay] = useState({ limit: 16 });

  // Redux dispatch function
  const dispatch = useDispatch();

  // Fetching products data from the Redux store
  const products = useSelector((state) => state.prods.products);

  // Fetching all data when the component mounts or when display settings change
  useEffect(() => {
    dispatch(getAllData(display));
  }, [dispatch, display]);

  // Loading spinner if products data is not available yet
  if (!products) {
    return (
      <Section
        className="d-flex justify-content-center align-items-center"
        style={{ color: "#BFEAF5" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Section>
    );
  }

  // Rendering the main component with DataDisplay and ProductCard
  return (
    <>
      <Section className="w-100">
        <DataDisplay setDisplay={setDisplay} />
        <div className="row justify-content-center w-100">
          {products &&
            (products.products.length > 0 ? (
              products.products.map((product) => (
                <ProductCard prodData={product} key={product.id} />
              ))
            ) : (
              <img
                src="/Assets/Error404.png"
                className="w-50"
                alt="No products were founed"
              />
            ))}
        </div>
      </Section>
    </>
  );
}
