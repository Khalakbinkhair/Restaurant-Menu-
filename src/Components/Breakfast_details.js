import React from 'react'
import '../Assets/css/style.css'
import Pancake from '../Assets/images/pancakes.jpg';
import Breakfast_Name from './Breakfast_name';
import Mocha_Coffee from '../Assets/images/Mocha-Coffee-6.jpg';


const Breakfast_details = () => {
  if (window.location.pathname == "/pancake") {
    return (
      <div>

        <Breakfast_Name urlname='/pancake' imgurl={Pancake} name='PAN CAKE' price='250' />
      </div>
    )
  }
  else if (window.location.pathname == "/Caffe_Mocha") {
    return (
      <div>

        <Breakfast_Name urlname='/Caffe_Mocha' imgurl={Mocha_Coffee} name='CAFFÈ MOCHA' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Cafe_au_lait") {
    return (
      <div>

        <Breakfast_Name urlname='/Cafe_au_lait' imgurl={Pancake} name='CAFÈ AU LAIT' price='450' />
      </div>
    )
  }
  else if (window.location.pathname == "/Cappuccino") {
    return (
      <div>

        <Breakfast_Name urlname='/Cappuccino' imgurl={Pancake} name='CAPPUCCINO' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Double_espresso_(doppio)") {
    return (
      <div>

        <Breakfast_Name urlname='/Double_espresso_(doppio)' imgurl={Pancake} name='DOUBLE ESPRESSO (DOPPIO)' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso") {
    return (
      <div>

        <Breakfast_Name urlname='/Espresso' imgurl={Pancake} name='ESPRESSO' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso_con_panna") {
    return (
      <div>

        <Breakfast_Name urlname='/Espresso_con_panna' imgurl={Pancake} name='ESPRESSO CON PANNA' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso_macchiato") {
    return (
      <div>

        <Breakfast_Name urlname='/Espresso_macchiato' imgurl={Pancake} name='ESPRESSO MACCHIATO ' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Flat_white") {
    return (
      <div>

        <Breakfast_Name urlname='/Flat_white' imgurl={Pancake} name='FLAT WHITE ' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Frappe") {
    return (
      <div>

        <Breakfast_Name urlname='/Frappe' imgurl={Pancake} name='FRAPPÉ' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Iced_mocha") {
    return (
      <div>

        <Breakfast_Name urlname='/Iced_mocha' imgurl={Pancake} name='ICED MOCHA' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Latte_macchiato") {
    return (
      <div>

        <Breakfast_Name urlname='/Latte_macchiato' imgurl={Pancake} name='LATTE MACCHIATO' price='350' />
      </div>
    )
  }

}
export default Breakfast_details;