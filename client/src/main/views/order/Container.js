import React from "react"
import OrderComponent from "./Component";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import Datetime from "react-datetime";

require('moment/locale/pt-br');

class OrderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.order,
      customer: {
        name: "",
        phone: "",
        email: "",
        pickUpTime: null
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

  }

  generateOrder() {
    return this.props.order.items.map((item, index) => {
      return <OrderComponent key={item.cupcake + index} item={item} index={index}/>
    })
  }

  handleChange(event) {
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
  handleDateChange(mnt) {
    this.setState((prevState) => {
      return {
        ...prevState,
        customer: {
          ...prevState.customer,
          pickUpTime: mnt._d
        }
      }
    })
  }

  placeOrder(e) {
    e.preventDefault();
    axios.post('http://localhost:8000/order/', this.state).then(response =>{
      console.log(response.data);
       this.props.history.push(`/confirmation/${response.data._id}`);
     })
  }


  render() {
    const yesterday = Datetime.moment().subtract(1, 'day');
    const valid = function( current ){
        return current.isAfter( yesterday ) && current.day() !== 1 && current.day() !== 2;
    };

    return (
      <div className="orderReview">
        <h3>Your order below:</h3>
        <h2 className="reviewTopBar">Cupcake</h2>
        <h2 className="reviewTopBar">Quantity</h2>
        <div>
          {this.generateOrder()}
          <h4 className="totalCost">Total: R${this.props.order.totalCost}</h4>
        </div>
        <hr/>
        <form className="formularioBox">
          <label>Pick Up Date and Time:
          </label>
          <br/>
          <Datetime inputProps={{placeholder:"Date and Time"}} className="datepicker" locale="pt-br" timeConstraints={{ hours: { min: 13, max: 19}}} isValidDate={ valid } dateFormat="dddd, Do MMMM YYYY" onChange={this.handleDateChange} value={this.state.customer.pickUpTime} name="pickUpTime" />
          <br/>
          <label>Nome:
          </label>
          <br/>
        <input
            className="formulario"
            onChange={this.handleChange}
            value={this.state.customer.name}
            name="name"
            type="text"
            placeholder="Nome"/>
          <br/>
      <label><i className="fa fa-lg fa-phone" aria-hidden="true"></i></label>
          <br/>
          <input
              className="formulario"
              onChange={this.handleChange}
              value={this.state.customer.phone}
              name="phone"
              type="tel"
              placeholder="Telefone"/>
          <br/>
      <label>Email:
          </label>
          <br/>
      <input
          className="formulario"
          onChange={this.handleChange}
          value={this.state.customer.email}
          name="email"
          type="email"
          placeholder="Email"/>
        </form>
        <div className="placeOrder">
          <Link to="/cupcakes">
            <button className="placeOrderButtons">Go back</button>
          </Link>
            <button className="placeOrderButtons" onClick={this.placeOrder}>Place order</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, null)(OrderContainer);
