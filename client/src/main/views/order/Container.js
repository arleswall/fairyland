import React from "react"
import OrderComponent from "./Component";
import {connect} from "react-redux";
// import {cupcakes} from "../../../redux//";
import {Link} from "react-router-dom";
import axios from "axios";


class OrderContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      inputs: {
            name: "",
            phone:""
            }
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }
  
  generateOrder(){
      return this.props.order.items.map((item, index)=>{
        return <OrderComponent key= {this.props.order.timePlaced + index}
                              item={item}
                              index={index}/>
      })
  }
  
  handleChange(event){
    event.persist();
    this.setState((prevState)=>{
      return{
        inputs:{
          ...prevState.inputs,
          [event.target.name]:event.target.value
        }
      }
    })
  }
  placeOrder(e, order){
    e.preventDefault();
axios.post('http://localhost:8000/order/', order).then(response=>{
  this.setState(prevState=>{
    return{
    order: [response.data, ...this.state.inputs],
    inputs: {
      title: "", 
      description: ""
    }
  }
})
})}
  
  render(){
    return(
      <div className="orderReview">
            <h3>Your order below:</h3>
                <div>
                    {this.generateOrder()}
                    <h4>Total Cost: R${this.props.order.totalCost}</h4>
                </div>
                <form>
                      <label>Nome: </label><input onChange={this.handleChange} value={this.state.inputs.name} name="name" type="text" placeholder="Nome"/>
                      <br/>
                      <label>Telefone: </label><input onChange={this.handleChange} value={this.state.inputs.phone} name="telefone" type="tel" placeholder="Telefone"/>
                </form>
            <Link to="/cupcakes"><button>Go back</button></Link>
            <button onClick={this.props.placeOrder}>Place order</button>
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return state
}
export default connect(mapStateToProps, null)(OrderContainer);
