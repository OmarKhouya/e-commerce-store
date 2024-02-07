import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useWindowSize from "../../Includes/getWindowSize";
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

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Nav({ navbarToggle }) {
  const [screenSize] = useWindowSize();
  const [data, setData] = useState([]);

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
  if (!Array.isArray(data)) {
    return (
      (navbarToggle || screenSize.width > 991) && (
        <NavWrapper className="col-lg-3 col-md-12 col-sm-12 mt-4 mb-2 ">
          <div
            className="mx-3 p-3 rounded d-flex flex-column w-100"
            style={{ backgroundColor: "#569DAA", minHeight: "100%" }}
          >
            <p className="text-muted text-center ">Which category?</p>
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
  return (
    (navbarToggle || screenSize.width > 991) && (
      <div className="col-lg-3 col-md-12 col-sm-12 mt-4 mb-2">
        <div
          className="mx-3 p-3 rounded d-flex flex-column"
          style={{ backgroundColor: "#87CBB9", minHeight: "100%" }}
        >
          <p className="text-muted text-center ">Which category?</p>
          <ul className="navbar-nav nav w-100 flex-column justify-content-around">
            {Array.isArray(data) &&
              data.slice(0, 15).map((nav) => (
                <LiNav className="nav-item " key={nav}>
                  <Link className="nav-link rounded" to={`Home/${nav}`}>
                    {nav}
                  </Link>
                </LiNav>
              ))}
          </ul>
        </div>
      </div>
    )
  );
}
