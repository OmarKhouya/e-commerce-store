// Importing necessary components from the specified paths
import Header from "./Components/Layout/Header";
import Nav from "./Components/Layout/Nav";
import Footer from "./Components/Layout/Footer";
import Filter from "./Components/Pages/FilteredMainPage";
import Main from "./Components";
import Product from "./Components/Products";
import NotFoundPage from "./Components/Pages/notFoundPage";
import Cart from "./Components/Cart";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

// Importing necessary modules from the react-router-dom and react
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Main App component
export default function App() {
  // State to manage the toggle status of the navbar
  const [navbarToggle, setNavbarToggle] = useState(false);

  return (
    // BrowserRouter used for client-side routing
    <BrowserRouter>
      {/* Main container with 100% width and hidden overflow */}
      <div className="w-100 overflow-hidden">
        {/* Header component with a callback to manage navbar toggle */}
        <Header setNavbarToggle={setNavbarToggle} />

        {/* Main content area */}
        <main className="row p-0">
          {/* Navigation component with the toggle status passed as a prop */}
          <Nav navbarToggle={navbarToggle} />

          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Main />} /> {/* Home route */}
            <Route path="/Home/:category" element={<Filter />} /> {/* Filtered main page */}
            <Route path="/Home/:category/:identify" element={<Product />} /> {/* Product details page */}
            <Route path="/:category/:identify" element={<Product />} /> {/* Generic product details page */}
            <Route path="/Cart" element={<Cart />} /> {/* Cart page */}
            <Route path="/About" element={<About />} /> {/* About page */}
            <Route path="/Contact" element={<Contact />} /> {/* Contact page */}
            <Route path="*" element={<NotFoundPage />} /> {/* 404 Not Found page */}
          </Routes>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
