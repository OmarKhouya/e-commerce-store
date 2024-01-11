import ProductCard from "./Products/Card";
import products from "../data.json"
import Section from './Section';
import { useFetch } from "../Includes/useFetch";
import { useEffect } from "react";
import DataDisplay from "./dataDisplay";

export default function Main() {
    const [data,getData] = useFetch()
    const [display,setDisplay] 
    useEffect(()=>{getData()},[])
    return (
        <Section className="col-lg-9 col-md-9 col-sm-12 mx-auto" >
            <DataDisplay />
            <div className="row justify-content-evenly">
                {
                    data.products && data.products.map(product => <ProductCard prodData={product} key={product.id} />)
                }
            </div>
        </Section>
        
    )
}
