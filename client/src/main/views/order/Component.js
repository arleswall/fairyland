import React from "react";
import {connect} from "react-redux";
// import {cupcakes} from "../../../redux//";


function OrderComponent(props) {
  let show={
    display: "inherit"
  }
  let hide ={
    display: "none"
  }

  return(   
            <div>
                <h3>Cupcake: {props.item.cupcakeForOrderDisplay.title}</h3>
                <h3 style={props.item.quantity.regular? show:hide}>Regulars: {props.item.quantity.regular}</h3>
                <h3 style={props.item.quantity.mini? show:hide}>Minis: {props.item.quantity.mini}</h3>
            </div>
  )
}

const mapStateToProps = (state)=>{
  return state
}
export default connect(mapStateToProps, null)(OrderComponent);