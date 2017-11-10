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
        <h3 className="cupcakeTitle">{props.cupcake.title}</h3>
          <img className="cupcakePic" src={props.cupcake.picture} alt=""/>
          
          <h4 className="cupcakeDescription">{props.cupcake.description}</h4>
          <br/>
          <h4 className="cupcakeDescription"><span style={props.cupcake.price.regular? show:hide}>Regular: R$ {props.cupcake.price.regular} </span> Mini: R$ {props.cupcake.price.mini}</h4>  
        
                <AddComponent cupcake={props.cupcake}/>
      </div>
  )
}

export default CupcakesComponent;
