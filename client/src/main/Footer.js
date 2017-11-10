import React from "react";
import {Link} from "react-router-dom";

function Footer(){
  return(
    <div className="footer">
      <Link to="/about" className="aboutLink" >About</Link>
    </div>
  )
}

export default Footer;