import React from "react";
import {Link} from "react-router-dom";
import facebook from "../../pics/facebook-link.png"
import instagram from "../../pics/insta-link.png"
import twitter from "../../pics/twitter-link.png"
import tripadvisor from "../../pics/trip-link.png"

function Home(props){
  return(
    <div className="home">
        <div className="orderBox">
            <Link to="/cupcakes" className="orderButton">Encomenda</Link>
        </div>
            <br/>
            <div className="socialmediabox">
                <a className="socialmediaLinks" href="https://www.facebook.com/FairyLandCupcakes/"><img src={facebook} alt=""/></a>
        
                <a className="socialmediaLinks" href="https://www.instagram.com/fairylandcupcakes/"><img src={instagram} alt=""/></a>
            
                <a className="socialmediaLinks" href="https://www.tripadvisor.com/Restaurant_Review-g303576-d3874976-Reviews-FairyLand_Cafe_Cupcakeria-Florianopolis_State_of_Santa_Catarina.html">
                  <img src={tripadvisor} alt=""/></a>
          
                <a className="socialmediaLinks" href="https://twitter.com/fairylandbr"><img src={twitter} alt=""/></a>
            </div>
    </div>
  )
}

export default Home;