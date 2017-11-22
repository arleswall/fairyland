import React from "react";
import {Link} from "react-router-dom";
import logo from "../fairy_logo.png";

function Navbar(props){

    const homeStyles = {
        width: "23vh",
        transition: "all 0.2s"
    }
    
    const cupcakeStyles = {
        width: "17vh",
        transition: "all 0.2s"
    }
  
  return(
    <div className="navbar">
      <Link to="/" ><img style={window.location.pathname === "/" ? homeStyles : cupcakeStyles} src={logo} alt=""/></Link>
    </div>
  )
}

export default Navbar;