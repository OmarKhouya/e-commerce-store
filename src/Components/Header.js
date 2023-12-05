import {ReactComponent as Logo} from "../Logo.svg"
import { Link } from "react-router-dom" 
import { FaSearch } from "react-icons/fa";
import { LuHome } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
export default function Header() {
    return (
        <div className="row border-bottom ">
            <div className="col-lg-2 col-md-4">
                <Logo style={{width: "100px",height: "100px"}}/>
            </div>
            <div className="col-lg-4 col-md-4 m-auto">
                <div className="input-group">
                    <input type="Search" placeholder="Controller/Manette.." className="form-control border-dark" /><button className="btn btn-outline-dark"><FaSearch /></button>
                </div>
            </div>
            <div className="col-lg-5 col-md-4 m-auto">
                <ul className="navbar nav text-dark">
                    <li className="navbar-item"><Link to={"/"} className="nav-link text-dark "><LuHome style={{marginBottom: "3px"}} /> Home</Link></li>
                    <li className="navbar-item active"><Link to={"/Cart"} className="nav-link text-dark"><BsCart3 style={{marginBottom: "2px"}} /> Cart</Link></li>
                    <li className="navbar-item"><Link to={"/Contact"} className="nav-link text-dark"><MdOutlineMessage style={{marginBottom: "-1px"}} /> Contact</Link></li>
                    <li className="navbar-item"><Link to={"/About"} className="nav-link text-dark"><TbInfoSquareRounded style={{marginBottom: "3px"}} /> About</Link></li>
                </ul>
            </div>
        </div>
    )
}
