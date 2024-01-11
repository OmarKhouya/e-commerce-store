import ProductCard from "./Products/Card";
import products from "../data.json"
import { useParams } from "react-router";
import Section from './Section';
import { useFetch } from "../Includes/useFetch";
import { useEffect } from "react";

export default function Filter() {
    const [data,getData] = useFetch()
    const {category} = useParams()
    
    useEffect(()=>{getData("p")},[category])

    return (
        <Section className="col-lg-9 col-md-9 col-sm-12 mx-auto">
            <div className="row justify-content-center">
                {products.products.filter(p=>p.category === `${category}`).map(
                    product => <ProductCard prodData={product} key={product.id} />
                )}
            </div>
        </Section>
    )
}
