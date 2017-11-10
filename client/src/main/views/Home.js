import React from "react";
import {Link} from "react-router-dom";

function Home(props){
  return(
    <div>
          <div className="home">
                  <Link to="/cupcakes" className="orderButton">Encomenda</Link>
          </div>
            <div className="socialmediabox">
                <a className="socialmediaLinks" href="https://www.facebook.com/FairyLandCupcakes/"><i class="fa fa-facebook-square" aria-hidden="true"></i> </a>
        
                <a className="socialmediaLinks" href="https://www.instagram.com/fairylandcupcakes/"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
            
                <a className="socialmediaLinks" href="https://www.tripadvisor.com/Restaurant_Review-g303576-d3874976-Reviews-FairyLand_Cafe_Cupcakeria-Florianopolis_State_of_Santa_Catarina.html">
                  <i class="fa fa-tripadvisor" aria-hidden="true"></i> </a>
          
                <a className="socialmediaLinks" href="https://twitter.com/fairylandbr"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
                
            </div>
    
    </div>
  )
}

export default Home;