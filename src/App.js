
import Header from './Components/Header'
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import Filter from './Components/Main'
import Main from './Components'
import Product from './Components/Products'
import NotFoundPage from './Components/Pages/notFoundPage'
import Cart from './Components/Cart'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className='w-100 overflow-hidden' >
        <Header />
          <main className='row p-0' >
            <Nav/>
            <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/Home/:category" element={<Filter />}/>
              <Route path="/Home/:category/:identify" element={<Product />}/>
              <Route path="/:category/:identify" element={<Product />}/>
              <Route path="/Cart" element={<Cart />}/>
              <Route path="/About" element={<About />}/>
              <Route path="/Contact" element={<Contact />}/>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
