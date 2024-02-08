import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";
import Receipt from "./Receipt";
import Section from "../Layout/Section";
import { getAllData } from "../../store/actions";

// Component for rendering the shopping cart page
export default function Cart() {
  // State to store data of items in the cart
  const [inCartData, setInCartData] = useState();

  // Redux selectors and dispatch hook
  const inCartIdentifies = useSelector(
    (state) => state.inCartIds.inCartIdentifies
  );
  const dispatch = useDispatch();

  // Fetch all product data on component mount
  useEffect(() => {
    dispatch(getAllData({ limit: 100 }));
  }, [dispatch]);

  // Get the latest products data from the Redux store
  const products = useSelector((state) => state.prods.products);

  // Update inCartData when products or inCartIdentifies change
  useEffect(() => {
    if (products) {
      setInCartData(
        products.products.filter((p) =>
          inCartIdentifies.some((item) => item.id === p.id)
        )
      );
    }
  }, [products, inCartIdentifies]);

  // Loading spinner while data is being fetched
  if (!inCartData) {
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

  return (
    <Section className="col-lg-9 col-md-9 col-sm-12 mx-auto">
      <div className="row">
        <div className="col-lg-8 col-sm-12 ">
          {inCartData.length > 0 ? (
            // Render individual cards for each item in the cart
            inCartData.map((cardData, index) => (
              <Card key={index} data={cardData} />
            ))
          ) : (
            // Display a message if the cart is empty
            <div
              className="text-center justify-content-center align-items-center d-flex rounded shadow mb-3"
              style={{
                minHeight: "40vh",
                backgroundColor: "#BFEAF5",
                borderColor: "#91D8E4",
              }}
            >
              <p className="fs-4  p-3 ">Try to add something in here!</p>
            </div>
          )}
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
          {/* Render the receipt component with cart data */}
          <Receipt data={inCartData} data2={inCartIdentifies} />
        </div>
      </div>
    </Section>
  );
}