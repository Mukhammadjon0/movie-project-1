import React,{useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { StateContext } from "../../context";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  const {state}=useContext(StateContext)
  const basketPageBtn=()=>{
    navigate('basket/')
}
  return (
    
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <div onClick={basketPageBtn} className="basket-box">
        <HiOutlineShoppingCart className="basket-icon" />
        <sup>({state.basket.length})</sup>
      </div>
    </nav>
  );
}

export default Navbar;
