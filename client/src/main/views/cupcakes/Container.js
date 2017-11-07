import React from "react";
// import {Link} from "react-router-dom";
import CupcakesComponent from "./Component"
import axios from "axios";
import {connect} from "react-redux";
import {cupcakes} from "../../../redux/actions/"

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
  

  
  render(props){
    return(
      <div className="foodMenu">
          {this.genList()}
          <button>Review Order</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    order: state.order
  }
}

export default connect(mapStateToProps, cupcakes) (CupcakesContainer);