import ProductCard from "./Products/Card";
import products from "../data.json"
import { useParams } from "react-router";

export default function Filter() {

    const {category} = useParams()
    
    return (
        <main className="row justify-content-evenly pt-3">
            {products.products.filter(p=>p.category === `${category}`).map(
                product => <ProductCard prodData={product} key={product.id} />
            )}
        </main>
    )
}
