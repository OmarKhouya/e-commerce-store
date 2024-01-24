import ProductCard from "./Products/Card";
import products from "../data.json";
import Section from "./Section";
import { useEffect, useState } from "react";
import DataDisplay from "./DataDisplay";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../store/actions";

export default function Main() {
  const [display, setDisplay] = useState({ limit: 16 });
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prods.products);
  useEffect(() => {
    dispatch(getAllData(display));
  }, [dispatch, display]);
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
    <>
      <Section className="col-lg-9 col-md-12 col-sm-12 mx-auto">
        <DataDisplay setDisplay={setDisplay} />
        <div className="row justify-content-evenly">
          {products &&
            products.products.map((product) => (
              <ProductCard prodData={product} key={product.id} />
            ))}
        </div>
      </Section>
    </>
  );
}
