import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router";


class ProtectedRoute extends React.Component{
 render(){
   const isAuthenticated = this.props.auth.isAuthenticated;
   const Component = this.props.component;
   const path = this.props.path;
    return (
        isAuthenticated || localStorage.getItem("token")? 
            <Route path={path} component={Component}/> :
            <Redirect to="/admin"/>
          
          )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {})(ProtectedRoute);