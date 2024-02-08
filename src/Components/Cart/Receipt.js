import React, { useState, useEffect } from "react";
import { CgArrowLongRight } from "react-icons/cg";

// Component for rendering the receipt in the shopping cart
export default function Receipt({ data, data2 }) {
  // State to store the total price
  const [total, setTotal] = useState(0);

  // Function to calculate the total price
  const CountTotal = () => {
    let calculatedTotal = 0;
    data.forEach((d) => {
      const match = data2.find((item) => item.id === d.id);
      if (match) {
        calculatedTotal += match.quantity * d.price;
      }
    });
    setTotal(calculatedTotal);
  };

  // Recalculate total when data or data2 changes
  useEffect(() => {
    CountTotal();
  }, [data, data2]);

  // Render the receipt component
  return (
    <div
      className="px-3 py-4 mb-3 rounded"
      style={{ backgroundColor: "#BFEAF5", borderColor: "#91D8E4" }}
    >
      <span className="d-block text-center fs-3">receipt</span>
      <hr />
      {data.map((d, index) => {
        const match = data2.find((item) => item.id === d.id);
        if (match) {
          return (
            <span className="d-block text-center my-2 fs-5" key={index}>
              <CgArrowLongRight className="me-3 mb-1" />
              {d.price} $ x {match.quantity}{" "}
            </span>
          );
        }
        return <></>;
      })}
      <span className="d-block text-center">Total : {total}$</span>
    </div>
  );
}