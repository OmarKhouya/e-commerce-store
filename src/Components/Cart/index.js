import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";
import Receipt from "./Receipt";
import Section from "../Layout/Section";
import { getAllData } from "../../store/actions";

export default function Cart() {
  const [inCartData, setInCartData] = useState();
  const inCartIdentifies = useSelector(
    (state) => state.inCartIds.inCartIdentifies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData({ limit: 100 }));
  }, [dispatch]);
  const products = useSelector((state) => state.prods.products);
  useEffect(() => {
    if (products) {
      setInCartData(
        products.products.filter((p) =>
          inCartIdentifies.some((item) => item.id === p.id)
        )
      );
    }
  }, [products, inCartIdentifies]);

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
            inCartData.map((cardData, index) => <Card key={index} data={cardData} />)
          ) : (
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
          <Receipt data={inCartData} data2={inCartIdentifies} />
        </div>
      </div>
    </Section>
  );
}
