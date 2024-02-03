import { ReactComponent as Logo } from "../../Logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { LuHome } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";

export default function Header({ setNavbarToggle }) {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className="shadow sticky-top top-0 w-100"
      style={{ backgroundColor: "#91D8E1" }}
    >
      <nav className="navbar navbar-expand-sm d-flex justify-content-between ">
        <div className="navbar-brand">
          <Link to={"/"}>
            <Logo style={{ width: "100px", height: "50px" }} />
          </Link>
          {screenSize.width <= 991 ? (
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => setNavbarToggle((prev) => !prev)}
            >
              filter
            </button>
          ) : (
            <span></span>
          )}
        </div>
        <button
          type="button"
          className="navbar-toggler me-3"
          data-bs-toggle="collapse"
          data-bs-target="#navOne"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse " id="navOne">
          <ul className="d-flex list-unstyled justify-content-evenly w-100 mb-0">
            <li className="">
              <Link to={"/"} className="nav-link text-dark ">
                <LuHome style={{ marginBottom: "3px" }} /> Home
              </Link>
            </li>
            <li className="">
              <Link to={"/Cart"} className="nav-link text-dark">
                <BsCart3 style={{ marginBottom: "2px" }} /> Cart
              </Link>
            </li>
            <li className="">
              <Link to={"/Contact"} className="nav-link text-dark">
                <MdOutlineMessage style={{ marginBottom: "-1px" }} /> Contact
              </Link>
            </li>
            <li className="">
              <Link to={"/About"} className="nav-link text-dark">
                <TbInfoSquareRounded style={{ marginBottom: "3px" }} /> About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
