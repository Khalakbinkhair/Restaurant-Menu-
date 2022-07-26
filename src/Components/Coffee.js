import React from 'react'
import '../Assets/css/style.css'
import Coffee_menu from './Coffee_menu';
import Coffee_details from './Coffee_details';

import { Link } from "react-router-dom";


const Coffee=()=>{
   

    return(
        <div>




             <div class="container fluid">
             <div class="row justify-content-center">
             <div class="col-md-8 text-center">
             <div class="card table-responsive">
             <div class="card-header"><b>NORTH END COFFEE</b></div>
   
        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-secondary">search</button>
       </div>

       <div class="card-body" >
            
            <div class='row'style={{"padding":"1rem"}} >

            <div class="col-md-12 ">
               <Link to="/">
            <button type="button" class="btn btn-secondary">Back</button>
            </Link>
            </div>
          
            </div>

            
           
            

            <div class='row' >
            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Caffe_Latte"           className="link" name="CAFFÈ LATTE"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Caffe_Mocha"              className="link" name="CAFFÈ MOCHA"/>
            </div>
            </div>
             
            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Cafe_au_lait"             className="link" name="CAFÈ AU LAIT"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Cappuccino"               className="link" name="CAPPUCCINO"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Double_espresso_(doppio)" className="link" name="DOUBLE ESPRESSO (DOPPIO)"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Espresso"                 className="link" name="ESPRESSO"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Espresso_con_panna"       className="link" name="ESPRESSO CON PANNA"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Espresso_macchiato"       className="link" name="ESPRESSO MACCHIATO "/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Flat_white"               className="link" name="FLAT WHITE "/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Frappe"                   className="link" name="FRAPPÉ"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Iced_mocha"               className="link" name="ICED MOCHA"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Latte_macchiato"          className="link" name="LATTE MACCHIATO"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Iced_latte"               className="link" name="ICED LATTE"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Freakshake"               className="link" name="FREAKSHAKE"/>
            </div>
            </div>

            <div class="col-md-4 " style={{"padding":"1rem"}}>
            <div class="card body ">
            <Coffee_menu urlname="/Cold_brew_coffee"         className="link" name="COLD BREW COFFEE"/>
            </div>
            </div>


</div>


</div> 
</div>
</div>
</div>
</div>
<br/>
<div >
</div>   
</div>
                



            
    )
}
export default Coffee;