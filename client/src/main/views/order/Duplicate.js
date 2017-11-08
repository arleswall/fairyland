import React from "react";
import {connect} from "react-redux";
// import {cupcakes} from "../../../redux//";
import {Link} from "react-router-dom";

function OrderComponent(props) {
  
  function orderList(){
    return props.order.items.map(item=>{
      return item.cupcake
    })
  }
  console.log(props)
  return(
    <div>        
          
                  <h3>Your order below:</h3>
                      <div>
                        <h3>{orderList()}</h3>
                          <h4>{props.order.totalCost}</h4>
                      </div>
                  <Link to="/cupcakes"><button>Go back make changes</button></Link>
                  <button onClick={props.placeOrder}>Place order</button>
        
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    order: state.order
  }
}
export default connect(mapStateToProps, null)(OrderComponent);