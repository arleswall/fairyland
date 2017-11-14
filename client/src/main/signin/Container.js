import React from "react";
import SigninComponent from "./Component";
import {connect} from "react-redux";
import * as actions from "../../redux/auth";

class SigninContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }
    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
  
    handleSubmit(e) {
        e.preventDefault();
        // This is where we will call our signin function from redux
        this.props.signin(this.state.inputs);
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }
    
    render() {
      let authErrCode = this.props.authErrCode.signup;
      let errMsg = "";
      if(authErrCode < 500 && authErrCode > 399){
        errMsg = "Invalid username or password!"
      } else if (authErrCode > 499){
        errMsg = "Server Error"
      }
        return (
            <SigninComponent
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs}
                errMsg = {errMsg}  />
        )
    }
}

const mapStateToProps = state =>{
  return state.auth;
}
export default connect(mapStateToProps, actions)(SigninContainer);