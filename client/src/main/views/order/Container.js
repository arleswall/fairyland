import React from "react"
import OrderComponent from "./Component";
import {connect} from "react-redux";
import {cupcakes} from "../../../redux/actions/";

class OrderContainer extends React.Component{
  constructor(){
    super()
  }
  
  generateOrder(){
      return this.props.order.items.map((item, index)=>{
        return <OrderComponent key= {this.props.order.totalCost + index}
                              item={item}
                              index={index}
                        
                              />
      })
  }
  
  
  render(){
    return(
      <div>
            <h3>Your order below:</h3>
                <div>
                    {this.generateOrder()}
                </div>
            <button>Go back make changes</button>
            <button onClick={this.props.placeOrder}>Place order</button>
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return {
    order: state.order
  }
}
export default connect(mapStateToProps, cupcakes)(OrdersContainer);
