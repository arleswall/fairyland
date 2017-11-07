import React from "react";
import AddComponent from "./AddComponent";

function CupcakesComponent(props){

let show={
  display: "inherit"
}
let hide ={
  display: "none"
}

  return(
      <div className="cupcakesBox">
          <img className="cupcakePic" src={props.cupcake.picture} alt=""/>
          <h4>{props.cupcake.title}</h4>
          <h4>{props.cupcake.description}</h4>
          <h4>Regular: ${props.cupcake.price.regular}</h4>
          <h4 style={props.cupcake.price.mini? show:hide}>Mini: ${props.cupcake.price.mini}</h4>
          <AddComponent cupcake={props.cupcake}/>
      </div>
  )
}

export default CupcakesComponent;
