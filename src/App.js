
import Header from './Components/Header'
import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import { Route, Router, Routes } from 'react-router'
import Filter from './Components/Main'
import Home from './Components'
import Product from './Components/Products'
import NotFoundPage from './Components/notFoundPage'

export default function App() {
  return (
    <div className='mx-2'>
      <Header />
      <Nav/>
      <Routes>
        <Route path="/Product/:identify" element={<Product />}/>
        <Route path="/:category" element={<Filter />}/>
        <Route path="/" element={<Home />}/>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
