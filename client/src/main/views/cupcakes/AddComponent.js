import React from "react";
import {connect} from "react-redux";
import * as actions from "../../../redux/orders";
// import {addItem, removeItem} from "../../../redux/orders";


function AddComponent(props){
  function cupcakeQuantity(id, size) {
    const item = props.order.items.find(item => item.cupcake === id);
    return item === undefined ? 0 : item.quantity[size]
  }
  
  let show={
    display: "inline-block",
    border: "1px solid red",
    float: "left",
    width: "40%"
  }
  let hide ={
    display: "none"
  }
  // console.log(props.order.items)
  
  return(
    <div className="orderOptions">
          <div style={props.cupcake.price.regular? show:hide}>
              <p className="numbers">{cupcakeQuantity(props.cupcake._id, "regular")} </p>
              <div className="addButtonBox">
              <button className="addButton" onClick={()=>{props.addItem(props.cupcake, "regular")}}>+</button>
              <br/>
              <button className="addButton" onClick={()=>{props.removeItem(props.cupcake._id)}}>-</button>
              </div>
            <h4>R</h4>
          </div>
          <div className={props.cupcake.price.regular? "minis" : "minisCenter"}>
                <p className="numbers">{cupcakeQuantity(props.cupcake._id, "mini")}</p>
                <div className="addButtonBox">
                <button className="addButton" onClick={()=>{props.addItem(props.cupcake, "mini")}}>+</button>
                <br/>
                <button className="addButton" onClick={()=>{props.removeItem(props.cupcake._id)}}>-</button>
              </div>  
              <h4>M</h4>
          </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps, actions)(AddComponent);