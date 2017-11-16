import React from "react";
import AdminComponent from "./Component";
import axios from "axios";
import {connect} from "react-redux";
import * as actions from "../../../redux/auth";

class ListComponent extends React.Component{
  constructor(props) {
    super();
    this.state = {
      order: []
    };
    
  }
  componentDidMount() {
    // this.props.verify();  
    axios.get(`http://localhost:8000/admin/orders`).then(response => {
      this.setState({order: response.data});
    })
  }
  
  render(){
  return(
        <div className="omsBackground">
        {this.state.order.map(order=>{
          return(    
                  <AdminComponent order={order}
                                  key={order._id}
                                  />            
            
          )
        })
      }
        </div>
    
  )
  }
}

export default connect(null, actions)(ListComponent);