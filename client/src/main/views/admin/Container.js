import React from "react";
import AdminComponent from "./Component"
import axios from "axios";
import {connect} from "react-redux";
import * as actions from "../../../redux/auth";
import SigninContainer from "../../signin/Container";
import {Switch, Route} from "react-router-dom";

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
        <button onClick={this.props.logout}>Logout</button>
      {}
      
      <Switch>
        <Route exact path="/admin" component={SigninContainer}></Route>
        <Route path="/admin/orders" render={(props)=>{
          return(
            <div>
            {this.state.order.map(order=>{
              return(    
                      <AdminComponent order={order}/>            
                
              )
            })
          }
            </div>
          )
        }}></Route>
      </Switch>
      </div>
          
          )
        }
    }    
export default connect(null, actions)(AdminContainer);