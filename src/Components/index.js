import ProductCard from "./Products/Card";
import products from "../data.json"

export default function Filter() {
    
    return (
        <main className="row justify-content-evenly pt-3">
            {products.products.map(
                product => <ProductCard prodData={product} key={product.id} />
            )}
        </main>
    )
}
