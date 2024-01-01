import ProductCard from "./Products/Card";
import products from "../data.json"
import { useParams } from "react-router";
import Section from './Section';

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
