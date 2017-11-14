import React from "react";
import AdminComponent from "./Component"
import axios from "axios";


class AdminContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      order: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/order/`).then(response => {
      this.setState({order: response.data})
    })
  }

  
  render() {
    return (
      <div>
      {this.state.order.map(order=>{
        return(
          <AdminComponent order={order}/>
        )
      })}
      </div>
          
          )
        }
    }    
export default AdminContainer;