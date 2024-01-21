import ProductCard from "./Products/Card";
import products from "../data.json";
import { useParams } from "react-router";
import Section from "./Section";
import { useEffect, useState } from "react";
import DataDisplay from "./dataDisplay";

export default function Filter() {
  const { category } = useParams();
  const [display, setDisplay] = useState({ limit: 16 });
  const [data,setData] = useState([])
  useEffect(()=>{
      const getData = async () =>{
          const resp = await fetch(`https://dummyjson.com/products/category/${category}?limit=${display.limit}`)
          setData(await resp.json())
      }
      getData()
  },[category])
  return (
    <Section className="col-lg-9 col-md-9 col-sm-12 mx-auto">
      <DataDisplay setDisplay={setDisplay} />
      <div className="row justify-content-center">
        {data.products &&
          data.products.map((product) => (
            <ProductCard prodData={product} key={product.id} />
          ))}
      </div>
    </Section>
  );
}
