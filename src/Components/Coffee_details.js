import React from 'react'
import '../Assets/css/style.css'
import coffee_Caffe_Latte from '../Assets/images/Caffe_Latte.jpg';
import Coffee_Name from './Coffee_name';
import { Navigate } from "react-router-dom";


const Coffee_details = ()=>{
  if (window.location.pathname=="/Caffe_Latte") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Caffe_Latte'  imgurl={coffee_Caffe_Latte} name='CAFFÈ LATTE' price='250'  />
</div>
    )
  }
  else if (window.location.pathname=="/Caffe_Mocha") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Caffe_Mocha' imgurl={coffee_Caffe_Latte} name='CAFFÈ MOCHA'  price='350'  />
</div>
    )
  }
  else if (window.location.pathname=="/Cafe_au_lait") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Cafe_au_lait' imgurl={coffee_Caffe_Latte} name='CAFÈ AU LAIT'  price='450'  />
</div>
    )
  }
  else if (window.location.pathname=="/Cappuccino") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Cappuccino' imgurl={coffee_Caffe_Latte} name='CAPPUCCINO'  price='350'  />
</div>
    )
  }
  else if (window.location.pathname=="/Double_espresso_(doppio)") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Double_espresso_(doppio)' imgurl={coffee_Caffe_Latte} name='DOUBLE ESPRESSO (DOPPIO)'  price='350'  />
</div>
    )
  }
  else if (window.location.pathname=="/Espresso") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Espresso' imgurl={coffee_Caffe_Latte} name='ESPRESSO'  price='350'  />
</div>
    )
  }
  else if (window.location.pathname=="/Espresso_con_panna") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Espresso_con_panna' imgurl={coffee_Caffe_Latte} name='ESPRESSO CON PANNA'  price='350'  />
</div>
    )
  }
  else if (window.location.pathname=="/Espresso_macchiato") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Espresso_macchiato' imgurl={coffee_Caffe_Latte} name='ESPRESSO MACCHIATO '  price='350'  />
</div>
    )
  } 
  
  else if (window.location.pathname=="/Flat_white") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Flat_white' imgurl={coffee_Caffe_Latte} name='FLAT WHITE '  price='350'  />
</div>
    )
  }

  else if (window.location.pathname=="/Frappe") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Frappe' imgurl={coffee_Caffe_Latte} name='FRAPPÉ'  price='350'  />
</div>
    )
  }
  else if (window.location.pathname=="/Iced_mocha") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Iced_mocha' imgurl={coffee_Caffe_Latte} name='ICED MOCHA'  price='350'  />
</div>
    )
  }

  else if (window.location.pathname=="/Latte_macchiato") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Latte_macchiato' imgurl={coffee_Caffe_Latte} name='LATTE MACCHIATO'  price='350'  />
</div>
    )
  }

  else if (window.location.pathname=="/Iced_latte") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Iced_latte' imgurl={coffee_Caffe_Latte} name='ICED LATTE'  price='350'  />
</div>
    )
  }

  else if (window.location.pathname=="/Freakshake") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Freakshake' imgurl={coffee_Caffe_Latte} name='FREAKSHAKE'  price='350'  />
</div>
    )
  }

  else if (window.location.pathname=="/Cold_brew_coffee") {
    return(
        <div>
         {/* {elmnt} */}
         <Coffee_Name   urlname='/Cold_brew_coffee' imgurl={coffee_Caffe_Latte} name='COLD BREW COFFEE'  price='350'  />
</div>
    )
  }
    
}
export default Coffee_details;