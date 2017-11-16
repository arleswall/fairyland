import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import CupcakesContainer from "./views/cupcakes/Container";
import OrderContainer from "./views/order/Container";
import ThankYou from "./views/order/ThankYou";
import About from "./views/About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminContainer from "./views/admin/Container";


class App extends React.Component{

  render(){
    return(
      <div className="app-wrapper">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cupcakes" component={CupcakesContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/order" component={OrderContainer}/>
            <Route path="/confirmation/:id" component={ThankYou}/>
            <Route path="/admin" component={AdminContainer}/>
        </Switch>
      <Footer/>
      </div>
    )
  }
}

export default App;