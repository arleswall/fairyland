import React from "react";
import {Switch, Route} from "react-router-dom";
import Cupcake from "./Cupcake";

function CupcakesComponent(props){
const searchById = props.searchById
  return(
    <div>
  <div className="cupcakeLinks">
    {props.generateLinks()}
</div>
    <div className="cupcakes">
        <Switch>
            <Route path="/cupcakes/:id" render={(props)=>{
              return(
                <Cupcake searchById={searchById}{...props}/>
              )
            }}/>
        </Switch>
    </div>
  </div>
  )
}

export default CupcakesComponent;