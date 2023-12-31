import ProductCard from "./Products/Card";
import products from "../data.json"
import styled from "styled-components";

const Section = styled.section`
    /* max-height: 77.5vh;  */
    overflow: scroll;
    overflow-x: hidden;
    @media (min-width: 768px){
        max-height: 77.5vh!important;
    }
    @media (max-width: 767px){
        max-height: none!important;
    }
`

export default function Main() {
    
    return (
        <Section className="col-lg-9 col-md-9 col-sm-12" >
            <div className="row justify-content-evenly pt-3">
                {products.products.map(
                    product => <ProductCard prodData={product} key={product.id} />
                )}
            </div>
        </Section>
        
    )
}
