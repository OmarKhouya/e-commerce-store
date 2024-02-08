// Importing necessary React and Redux hooks, components, and actions
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DataDisplay from "../Layout/DataDisplay";
import ProductCard from "../Products/Card";
import Section from "../Layout/Section";
import { getDataByCategory } from "../../store/actions";

// Functional component for the Filtered Main Page
export default function Filter() {
  // Extracting category from route parameters
  const { category } = useParams();

  // State to manage the display settings
  const [display, setDisplay] = useState({ limit: 16 });

  // Redux dispatch function
  const dispatch = useDispatch();

  // Effect to fetch data based on category and display settings
  useEffect(() => {
    dispatch(getDataByCategory(category, display));
  }, [dispatch, display, category]);

  // Selecting products from Redux state
  const products = useSelector((state) => state.prods.products);

  // Loading spinner if products are not available yet
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

  // Rendered content for the Filtered Main Page
  return (
    <Section className="col-lg-8 col-md-12 col-sm-12 mx-auto">
      {/* Data display component for filtering and searching */}
      <DataDisplay setDisplay={setDisplay} category={category} />
      
      {/* Displaying products in a row */}
      <div className="row justify-content-center">
        {products &&
          products.products.map((product) => (
            <ProductCard prodData={product} key={product.id} />
          ))}
      </div>
    </Section>
  );
}