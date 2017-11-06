import React from "react";
import {connect} from "react-redux";
import {cupcakes} from "../../../redux/actions/";


function AddComponent(props){
  let show={
    display: "inherit"
  }
  let hide ={
    display: "none"
  }
  console.log(props)
  return(
    <div>
          <div>
              <h3>{props.cupcake.quantity.regular} Regular</h3>
              <button onClick={()=>{props.addItem(props.cupcake)}}>+</button>
              <button onClick={()=>{props.removeItem(props.cupcake)}}>-</button>
          </div>
          <div style={props.cupcake.price.mini? show:hide}>
                <h3>{props.cupcake.quantity.mini} Mini</h3>
                <button onClick={()=>{props.addMini(props.cupcake)}}>+</button>
                <button onClick={()=>{props.removeMini(props.cupcake)}}>-</button>
          </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    cupcakes:state.cupcakes
  }
}

export default connect(mapStateToProps, cupcakes)(AddComponent);