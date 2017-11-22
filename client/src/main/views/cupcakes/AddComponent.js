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
    float: "left",
    width: "40%"
  }
  let hide ={
    display: "none"
  }

  
  return(
    <div className="orderOptions">
          <div style={props.cupcake.price.regular? show:hide}>
              <p className="numbers">{cupcakeQuantity(props.cupcake._id, "regular")} </p>
              <div className="addButtonBox">
              <button className="addButton" onClick={()=>{props.addItem(props.cupcake, "regular")}}><i className="fa fa-plus" aria-hidden="true"></i></button>
              <br/>
              <button className="addButton" onClick={()=>{props.removeItem(props.cupcake, "regular")}}><i className="fa fa-minus" aria-hidden="true"></i></button>
              </div>
          </div>
          <div className={props.cupcake.price.regular? "minis" : "minisCenter"}>
                <div className="numbers">
                    <p >{cupcakeQuantity(props.cupcake._id, "mini")}</p>
                </div>
              <div className="addButtonBox">
                <button className="addButton" onClick={()=>{props.addItem(props.cupcake, "mini")}}><i className="fa fa-plus" aria-hidden="true"></i></button>
                <br/>
                <button className="addButton" onClick={()=>{props.removeItem(props.cupcake, "mini")}}><i className="fa fa-minus" aria-hidden="true"></i></button>
              </div>  
          </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps, actions)(AddComponent);