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
          
      <div className="omsBox">
        <h4>Order Number: {props.order._id}</h4>
        <br/>
          <h4 className="omsTopBar">Cupcake</h4><span> </span>
          <h4 className="omsTopBar">Quantity:</h4>
          
        {props.order.items.map(item=>{
          return(
            <div className="omsListBox">
              <h4>{item.cupcake}</h4>
            <h4 style={item.quantity.mini? show:hide}>{item.quantity.mini}</h4>
            <h4 style={item.quantity.regular? show:hide}>{item.quantity.regular}</h4>
            </div>
          )
        })}
        <h4 className="totalCostOms">Total: R $ {props.order.totalCost}</h4>
        <br/>
        <h4 className="pickUpDayOms">Pick Up Day:</h4>
        <h4>{newDateFormat}</h4>
        <h4 className="pickUpDayOms">Pick Up Time:</h4>
        <h4>{newTimeFormat}</h4>  
      </div>
    )
  }

export default AdminComponent