import React from "react";
import {Link} from "react-router-dom";
import CupcakesComponent from "./Component"
import axios from "axios";
import {connect} from "react-redux";
// import * as actions from "../../../redux/orders";
// import OrderComponent from "../order/Component";

class CupcakesContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      cupcakes: [],
      order: {}
    }
  }
  
  componentDidMount(){
      axios.get('http://localhost:8000/cupcake/').then(response => {
        this.setState({
          cupcakes: response.data.reverse()
        })
      })
    }
  

  genList(){
    return this.state.cupcakes.map((item)=>{
      return (
        <CupcakesComponent cupcake={item} key={item._id} />
      )
    })
  }
  
  
  
  render(){
    return(
      <div className="foodMenu">
          {this.genList()}
          <div className="reviewOrderButtonBox">
              <Link to="/order"><button className="reviewOrderButton">Review Order</button></Link>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps, null) (CupcakesContainer);