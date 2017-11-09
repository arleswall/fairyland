import React from "react";
import axios from "axios";

class ThankYou extends React.Component{
  constructor(){
    super()
    this.state ={
      order: {}
    }
  }
  
  componentDidMount(){
    axios.get(`http://localhost:8000/order/${this.props.match.params.id}`).then(response => {
      this.setState({
        order: response.data
      })
    })
  }
  
  
//   {this.state.order.items.map((item)=>{
//   return(
//   <h3>{item.cupcake}</h3>
// )}
// )}
  render(){
    console.log(this.state);
  return(
    <div>
       <h1>Thank You</h1>
    </div>
  )
}
}
export default ThankYou;