import React from "react";
// import {Link} from "react-router-dom";
import CupcakesComponent from "./Component"
import axios from "axios";

// const APIurl = "apiurl"

class CupcakesContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      cupcakes: []
    }
    
    // this.generateLinks = this.generateLinks.bind(this);
    this.searchById = this.searchById.bind(this);
  }
  
  componentDidMount(){
      axios.get('http://localhost:8000/cupcake/').then(response => {
        this.setState({
          cupcakes: response.data.reverse()
        })
      })
    }
          //this.loadData();
  
  //loadData(){
  //axios.get(APIurl).then((response)=>{
  //this.setState({
//  cupcakes: response.data.results
// })
// })
// }
  
  searchById(id){
     return this.state.cupcakes.find((cupcake)=>{
        return id === cupcake._id
      })
  }
  
  // generateLinks(){
  // return this.state.cupcakes.map((cupcake)=>{
  //     return <Link to={`/cupcakes/${cupcake._id}`} key={cupcake._id}>{cupcake.title}</Link>
  //   })
  // }
  
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
          <button>Place Order</button>
      </div>
    )
  }
}

export default CupcakesContainer;