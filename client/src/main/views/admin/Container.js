import React from "react";
import axios from "axios";
import * as actions from "../../../redux/auth";
import SigninContainer from "../../signin/Container";
import { Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import ProtectedRoute from "../../signin/ProtectedRoute";
import ListComponent from "./ListComponent";


axios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

class AdminContainer extends React.Component {
  constructor(props) {
    super();  
  }


  render() {
    const isAuthenticated = this.props.auth.isAuthenticated;
    return (
      <div className="logout">
        {isAuthenticated ? <button onClick={this.props.logout}>Logout</button> : null}
      
      <Switch>
        <Route exact path="/admin" component={SigninContainer}/>
        <ProtectedRoute path="/admin/orders" component={ListComponent}/>
        />
      </Switch>
      </div>
          
          )
        }
    } 
  const mapStateToProps = state=>{
    return state;
  }     
export default withRouter(connect(mapStateToProps, actions)(AdminContainer));