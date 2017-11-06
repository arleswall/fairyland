import React from "react"
import OrderComponent from "./Component";


class OrderContainer extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
            {genOrder}
            {genTotalCost}
            <OrderComponent/>
      </div>
    )
  }
}

export default OrdersContainer
