import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import DataDisplay from "../Layout/DataDisplay";
import ProductCard from "../Products/Card";
import Section from "../Layout/Section";
import { getDataByCategory } from "../../store/actions";
import { useParams } from "react-router";

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
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Section>
    );
  }
  return (
    <Section className="col-lg-8 col-md-12 col-sm-12 mx-auto">
      <DataDisplay setDisplay={setDisplay} category={category}/>
      <div className="row justify-content-center">
        {products &&
          products.products.map((product) => (
            <ProductCard prodData={product} key={product.id} />
          ))}
      </div>
    </Section>
  );
}
