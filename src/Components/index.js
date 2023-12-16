import { Component } from 'react'
import Header from './Header'
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"
import products from "../data.json"
import Product from './Product'

// const categories = products.products.map(product => product.category).filter((value, index, self) => self.indexOf(value) === index)

export default class MainComp extends Component { 
    render() {
        return (
            <div className='container'>
                <Header />
                <Nav/>
                <Main products={products.products}/>
                <Footer />
                <Product prodData={products.products}/>
            </div>
        )
    }
}
