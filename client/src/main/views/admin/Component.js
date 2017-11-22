import React from "react";
import moment from "moment";

function AdminComponent(props){
    let show={
      display: "inherit"
    }
    let hide ={
      display: "none"
    }
    let completed = {
        color: "#10A45A",
        fontSize: "2em",
        fontFamily:  "'Roboto', sans-serif"
    }
    let pending = {
        color: "#BC1139",
        fontSize: "2em",
        fontFamily: "'Roboto', sans-serif"
    }
    let pickupTime = props.order.customer.pickUpTime;
    let newDateFormat = moment(pickupTime).format("dddd, D MMMM YYYY");
    let newTimeFormat = moment(pickupTime).format("h:mm");

    return (

      <div className="omsBox">
      <h4>Order Number: <span className="orderNumberOms">{props.order._id}</span></h4>
      <input className="checkbox" onChange={(e)=>{props.handleEdit(e, props.id)}} checked={props.order.completed} name="completed" type="checkbox"/>

        <label style={props.order.completed? completed : pending}>{props.order.completed? "Completed" : "Pending"}</label>
          <br/>

          {props.order.items.map((item, i)=>{
              return(
                  <div key={item._id} className="omsListBox">
                      <h4>{item.cupcake.title}</h4>
                      <h4 style={item.quantity.regular? show:hide}>{item.quantity.regular}G</h4>
                      <h4 style={item.quantity.mini? show:hide}>{item.quantity.mini}</h4>
                  </div>
              )
          })}
        <h4 className="totalCostOms">Total: R$ {props.order.totalCost}</h4>
        <br/>
        <div className="pickUpDayOms">
            <h4>Pick Up Day:</h4>
            <h4>{newDateFormat}</h4>
        </div>
        <div className="pickUpTimeOms">
            <h4>Pick Up Time:</h4>
            <h4>{newTimeFormat}</h4>
        </div>
      </div>
    )
  }

export default AdminComponent
