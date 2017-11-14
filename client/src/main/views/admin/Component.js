import React from "react";
import moment from "moment";

function AdminComponent(props){
    let show={
      display: "inherit"
    }
    let hide ={
      display: "none"
    }
    let newDateFormat = moment(props.order.customer.pickUpTime).format("dddd, D MMMM YYYY");
    let newTimeFormat = moment(props.order.customer.pickUpTime).format("h:mm")
    return (
      <div className="thankYouBox">
        <h3>Your order has been confirmed!</h3>
        <h3>Order Number: {props.order._id}</h3>
        <br/>
          <h4 className="reviewTopBar">Cupcake</h4>
          <h4 className="reviewTopBar">Quantity</h4>
        {props.order.items.map(item=>{
          return(
            <div className="reviewOrderBox">
              <h4>{item.cupcake.title}</h4>
            <h4 style={item.quantity.mini? show:hide}>{item.quantity.mini}</h4>
            <h4 style={item.quantity.regular? show:hide}>{item.quantity.regular}</h4>
            </div>
          )
        })}
        <h3 className="totalCostThankYouPage">Total: R$ {props.order.totalCost}</h3>
        <h3 className="pickUpDay">Pick Up Day:</h3>
        <h3>{newDateFormat}</h3>
        <h3 className="pickUpDay">Pick Up Time:</h3>
        <h3>{newTimeFormat}</h3>  
      </div>
    )
  }

export default AdminComponent