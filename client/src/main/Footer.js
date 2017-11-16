import React from "react";
import {Link} from "react-router-dom";

function Footer(){
  return(
    <div className="footer">
      <Link to="/about" className="aboutLink" >Saiba Mais</Link>
    </div>
  )
}

export default Footer;