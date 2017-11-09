import React from "react"
import OrderComponent from "./Component";
import {connect} from "react-redux";
// import {cupcakes} from "../../../redux//";
import {Link} from "react-router-dom";
import axios from "axios";

class OrderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.order,
      customer: {
        name: "",
        phone: "",
        pickUpTime: null
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  generateOrder() {
    return this.props.order.items.map((item, index) => {
      return <OrderComponent key={item.cupcake + index} item={item} index={index}/>
    })
  }

  handleChange(event) {
    console.log(event.target.value)
    event.persist();
    this.setState((prevState) => {
      return {
        ...prevState,
        customer: {
          ...prevState.customer,
          [event.target.name]: event.target.value
        }
      }
    })
  }

  placeOrder(e) {
    e.preventDefault();
    axios.post('http://localhost:8000/order/', this.state).then(response =>{
       this.props.history.push(`/confirmation/${response.data._id}`);
     })
  }

  render() {
    console.log(this.props.history)
    return (
      <div className="orderReview">
        <h3>Your order below:</h3>
        <h2 className="reviewTopBar">Cupcake</h2>
        <h2 className="reviewTopBar">Grande</h2>
        <h2 className="reviewTopBar">Pequeno</h2>
        <div>
          {this.generateOrder()}
          <h4 className="totalCost">Total: R${this.props.order.totalCost}</h4>
        </div>
        <hr/>
        <form className="formularioBox">
          <label>Nome:
          </label>
          <br/>
          <input className="formulario" onChange={this.handleChange} value={this.state.customer.name} name="name" type="text" placeholder="Nome"/>
          <br/>
          <label>
            <i className="fa fa-phone" aria-hidden="true"></i>
          </label>
          <br/>
          <input className="formulario" onChange={this.handleChange} value={this.state.customer.phone} name="phone" type="tel" placeholder="Telefone"/>
          <br/>
          <label>Date:
          </label>
          <br/>
          <input className="formulario" type="datetime-local" onChange={this.handleChange} value={this.state.customer.pickUpTime} name="pickUpTime"/>
        </form>
        <div className="placeOrder">
          <Link to="/cupcakes">
            <button>Go back</button>
          </Link>
            <button onClick={this.placeOrder}>Place order</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, null)(OrderContainer);
