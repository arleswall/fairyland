import React from "react";
// import {Switch, Route} from "react-router-dom";
// import Cupcake from "./Cupcake";
import AddComponent from "./AddComponent";

function CupcakesComponent(props){
// const searchById = props.searchById
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

// 
//   <div className="cupcakes">
//     <Switch>
//           <Route path="/cupcakes/:id" render={(props)=>{
//             return(
//               <Cupcake searchById={searchById}{...props}/>
//             )
//           }}/>
//     </Switch>
// </div>