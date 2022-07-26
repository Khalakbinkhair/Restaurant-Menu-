import React from 'react'
import '../Assets/css/style.css'
import { Link } from "react-router-dom";



const Menu_card=(props)=>{
    return(
<div>


           
               <div class="card body text-white">
              
               < Link to={ props.urlname}>
               
                  <img class="card-img" src={props.imgurl} />
                  <div class="card-img-overlay">
                    <h3 class="card-text"> <i>{props.name}</i></h3>
                  </div>
                </Link>
              
               </div>
           
           

            



</div>



)
}
export default Menu_card;