import ProductCard from "./Products/Card";
import products from "../data.json"
import Section from './Section';

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
