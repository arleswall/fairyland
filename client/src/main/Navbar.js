import React from "react";
import {Link} from "react-router-dom";
import logo from "../fairy_logo.png";

function Navbar(props){
  
  return(
    <div className="navbar">
      <Link to="/" ><img className="logo" src={logo} alt=""/></Link>
    </div>
  )
}

export default Navbar;