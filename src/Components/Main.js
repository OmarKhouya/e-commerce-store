import ProductCard from "./Products/Card";
import products from "../data.json"
import styled from "styled-components";
import { useParams } from "react-router";

const Section = styled.section`
    overflow: scroll;
    overflow-x: hidden;
    @media only screen and (min-width: 768px){
        max-height: 77.5vh!important;
    }
    @media only screen and (max-width: 767px){
        max-height: none;
    }
`

export default function Filter() {

    const {category} = useParams()
    
    return (
        <Section className="col-lg-9 col-md-9 col-sm-12">
            <div className="row justify-content-center pt-3">
                {products.products.filter(p=>p.category === `${category}`).map(
                    product => <ProductCard prodData={product} key={product.id} />
                )}
            </div>
        </Section>
    )
}
