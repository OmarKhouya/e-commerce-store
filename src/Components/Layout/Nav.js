// Importing necessary components and libraries
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useWindowSize from "../../Includes/getWindowSize";

// Styled component for list items in the navbar
const LiNav = styled.li`
  text-align: center;
  border-radius: 10px;
  list-style: none;
  margin: 0;
  flex-grow: 1;
  :only-child {
    text-decoration: none;
    color: black;
  }

  :hover {
    background-color: white;
    color: black;
  }
`;

// Styled component for the navbar wrapper
const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// Component for rendering the navbar
export default function Nav({ navbarToggle }) {
  // State to track the window size
  const [screenSize] = useWindowSize();

  // State to store data fetched from the API
  const [data, setData] = useState([]);

  // Effect to fetch category data from the API
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(`https://dummyjson.com/products/categories`);
        const jsonData = await resp.json();
        setData(jsonData);
      } catch (error) {
        setData(undefined);
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  // Loading state when data is still being fetched
  if (!Array.isArray(data)) {
    return (
      (navbarToggle || screenSize.width > 991) && (
        <NavWrapper className="col-lg-3 col-md-12 col-sm-12 mt-4 mb-2">
          <div
            className="mx-3 p-3 rounded d-flex flex-column w-100"
            style={{ backgroundColor: "#569DAA", minHeight: "100%" }}
          >
            <p className="text-muted text-center">Which category?</p>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "100%" }}
            >
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </NavWrapper>
      )
    );
  }
  const LgNav = styled.nav`
    @media (min-width: 768px) {
      width: 18rem;
    }
    @media (max-width: 969px) {
      width: 15rem;
    }
    @media (max-width: 767px) {
      display: none !important;
    }
  `;
  const SmNav = styled.nav`
    @media (min-width: 768px) {
      display: none !important;
    }
    display: block;
  `;
  // Render the navbar with categories
  return (
    /*  (navbarToggle || screenSize.width > 991) &&  */ <div className="">
      <LgNav
        className="p-3 d-flex flex-column"
        style={{ backgroundColor: "#87CBB9", minHeight: "100%" }}
      >
        <p className="text-muted text-center">Which category?</p>
        <ul className="navbar-nav nav w-100 flex-column justify-content-around">
          {/* Map through the categories and create list items with links */}
          {Array.isArray(data) &&
            data.slice(0, 13).map((nav) => (
              <LiNav className="nav-item" key={nav}>
                <Link className="nav-link rounded" to={`Home/${nav}`}>
                  {nav}
                </Link>
              </LiNav>
            ))}
        </ul>
      </LgNav>
      <SmNav className="py-3" style={{ backgroundColor: "#87CBB9", minHeight: "100%" }}>
        <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
              Beauty and Personal Care
            </button>
            <ul class="text-center dropdown-menu">
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Fragrances`}  className="text-decoration-none text-white">Fragrances</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Skincare`}  className="text-decoration-none text-white">Skincare</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/womens-Watches`}  className="text-decoration-none text-white">Womens Watches</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/womens-Bags`}  className="text-decoration-none text-white">Womens Bags</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/womens-Jewellery`}  className="text-decoration-none text-white">Womens Jewellery</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/mens-Watches`}  className="text-decoration-none text-white">Men Watches</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Sunglasses`}  className="text-decoration-none text-white">Sunglasses</Link>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Electronics & Auto
            </button>
            <ul class="text-center dropdown-menu">
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/smartphones`} className="text-decoration-none text-white">Smartphones</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/laptops`} className="text-decoration-none text-white">laptops</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Automotive`}  className="text-decoration-none text-white">Automotive</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Motorcycle`}  className="text-decoration-none text-white">Motorcycle</Link>
              </li>
            </ul>
          </div>
          
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
              Home and Living
            </button>
            <ul class="text-center dropdown-menu">
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Fragrances`}  className="text-decoration-none text-white">Groceries</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Home-Decoration`}  className="text-decoration-none text-white">Home Decoration</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Furniture`}  className="text-decoration-none text-white">Furniture</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Lighting`}  className="text-decoration-none text-white">Lighting</Link>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Apparel
            </button>
            <ul class="text-center dropdown-menu">
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/Tops`}  className="text-decoration-none text-white">Tops</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/womens-dresses`}  className="text-decoration-none text-white">Womens Dresses</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/womens-Shoes`}  className="text-decoration-none text-white">Womens Shoes</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/mens-shoes`}  className="text-decoration-none text-white">Men Shoes</Link>
              </li>
              <li className="mx-2 my-1 btn d-block btn-dark shadow">
                <Link to={`Home/mens-shirts`}  className="text-decoration-none text-white">Men Shirts</Link>
              </li>
            </ul>
          </div>
        </ul>
      </SmNav>
    </div>
  );
}
