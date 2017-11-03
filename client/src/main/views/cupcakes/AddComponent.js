import React from "react";

function AddComponent(props){
  let show={
    display: "inherit"
  }
  let hide ={
    display: "none"
  }
  return(
    <div>
          <div>
              <h3>0 Regular</h3>
              <button onClick={props.addItem}>+</button>
              <button onClick={props.removeItem}>-</button>
          </div>
          <div style={props.cupcake.price.mini? show:hide}>
                <h3>0 Mini</h3>
                <button onClick={props.addItem}>+</button>
                <button onClick={props.removeItem}>-</button>
          </div>
    </div>
  )
}

export default AddComponent;