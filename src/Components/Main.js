import ProductCard from "./Products/Card";
import products from "../data.json";
import { useParams } from "react-router";
import Section from "./Section";
import { useEffect, useState } from "react";
import DataDisplay from "./dataDisplay";
import { useDispatch, useSelector } from "react-redux";
import { getDataByCategory } from "../store/actions";

export default function Filter() {
  const { category } = useParams();
  const [display, setDisplay] = useState({ limit: 16 });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataByCategory(category, display));
  }, [dispatch, display, category]);
  const products = useSelector((state) => state.prods.products);
  if (!products) {
    return (
      <Section
        className="d-flex justify-content-center align-items-center"
        style={{ color: "#BFEAF5" }}
      > 
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </Section>
    );
  }
  return (
    <Section className="col-lg-9 col-md-9 col-sm-12 mx-auto">
      <DataDisplay setDisplay={setDisplay} />
      <div className="row justify-content-center">
        {products &&
          products.products.map((product) => (
            <ProductCard prodData={product} key={product.id} />
          ))}
      </div>
    </Section>
  );
}
