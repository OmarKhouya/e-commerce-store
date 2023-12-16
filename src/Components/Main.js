import ProductCard from "./Product/Card";

export default function Main({products}) {
    return (
        <main className="row justify-content-evenly">
            
            {products.filter(p=>p.category === "smartphones").map(
                product => <ProductCard prodData={product} key={product.id} />
            )}
        </main>
    )
}
