// Importing necessary components and icons
import { ReactComponent as Logo } from "../../Logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LuHome } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";

// Component for rendering the header/navbar
export default function Header({ setNavbarToggle }) {
  // State to track the window size
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Effect to update window size on resize events and cleanup
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
      style={{ backgroundColor: "#569DAA" }}
    >
      <nav className="navbar navbar-expand-sm d-flex justify-content-between">
        <div className="navbar-brand">
          {/* Logo with link to home */}
          <Link to={"/"}>
            <Logo style={{ width: "100px", height: "50px" }} />
          </Link>
          {/* Button for toggling filter on small screens */}
          {screenSize.width <= 991 ? (
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setNavbarToggle((prev) => !prev)}
            >
              filter
            </button>
          ) : (
            <span></span>
          )}
        </div>
        {/* Navbar toggler button for small screens */}
        <button
          type="button"
          className="navbar-toggler me-3 text-white border-white"
          data-bs-toggle="collapse"
          data-bs-target="#navOne"
        >
          <FaBars />
        </button>
        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navOne">
          <ul className="d-flex list-unstyled justify-content-evenly w-100 mb-0">
            <li className="">
              {/* Home link */}
              <Link to={"/"} className="nav-link text-white">
                <LuHome style={{ marginBottom: "3px" }} /> Home
              </Link>
            </li>
            <li className="">
              {/* Cart link */}
              <Link to={"/Cart"} className="nav-link text-white">
                <BsCart3 style={{ marginBottom: "2px" }} /> Cart
              </Link>
            </li>
            <li className="">
              {/* Contact link */}
              <Link to={"/Contact"} className="nav-link text-white">
                <MdOutlineMessage style={{ marginBottom: "-1px" }} /> Contact
              </Link>
            </li>
            <li className="">
              {/* About link */}
              <Link to={"/About"} className="nav-link text-white">
                <TbInfoSquareRounded style={{ marginBottom: "3px" }} /> About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}