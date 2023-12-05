import { Component } from 'react'
import Header from './Header'
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"

export default class MainComp extends Component {

    render() {
        return (
            <div className='container'>
                <Header />
                <Nav />
                <Main />
                <Footer />
            </div>
        )
    }
}
