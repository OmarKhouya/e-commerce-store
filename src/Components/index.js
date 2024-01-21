import ProductCard from "./Products/Card";
import products from "../data.json"
import Section from './Section';
import { useFetch } from "../Includes/useFetch";
import { useEffect, useState } from "react";
import DataDisplay from "./dataDisplay";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../store/actions";

export default function Main() {
    const [display,setDisplay] = useState({limit: 16})
    const dispatch = useDispatch()
    const products = useSelector(state=>state.prods.products)
    useEffect(()=>{dispatch(getAllData())},[])
    /* const [data,getData] = useFetch()
    useEffect(()=>{getData({limit: display.limit})},[display]) */

    return (
        <Section className="col-lg-9 col-md-9 col-sm-12 mx-auto" >
            <DataDisplay setDisplay={setDisplay}/>
            <div className="row justify-content-evenly">
                {
                    products && products.products.map(product => <ProductCard prodData={product} key={product.id} />)
                }
            </div>
        </Section>
        
    )
}
