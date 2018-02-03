import React from "react";
import AddComponent from "./AddComponent";

function CupcakesComponent(props){

let show={
  display: "inherit"
}
let hide ={
  display: "none"
}

const testStyles1 = {
    justifyContent: "space-around",
}
const testStyles2 = {
    justifyContent: "center",
}

  return(
      <div className="cupcakesBox">
        <h3 className="cupcakeTitle">{props.cupcake.title}</h3>
        <div className="cupcakePicBox">
          <img className="cupcakePic" src={props.cupcake.picture} alt=""/>
        </div> 
          <h4 className="cupcakeDescription">{props.cupcake.description}</h4>
          <br/>
          <h5 style={props.cupcake.price.regular? testStyles1 : testStyles2} className="cupcakePrice"><span style={props.cupcake.price.regular? show:hide}>Grande: R$ {props.cupcake.price.regular} </span> Mini: R$ {props.cupcake.price.mini}</h5>  
        
            <AddComponent cupcake={props.cupcake}/>
      </div>
  )
}

export default CupcakesComponent;
