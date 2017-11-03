import React from "react";

function Cupcake(props){
  const id = props.match.params.id
  return(
    <div>
        <h1>{props.searchById(id).title}</h1>
        <h2>{props.searchById(id).description}</h2>
        <h1>{props.searchById(id).price}</h1>
    </div>
  )
}

export default Cupcake;