import React from 'react'
import '../Assets/css/style.css'
import Brownie from '../Assets/images/Brownie.jpg';
import Dessert_Name from './Dessert_name';
import Mocha_Coffee from '../Assets/images/Mocha-Coffee-6.jpg';


const Dessert_details = () => {
  if (window.location.pathname == "/brownie") {
    return (
      <div>

        <Dessert_Name urlname='/brownie' imgurl={Brownie} name='Brownie' price='250' />
      </div>
    )
  }
  else if (window.location.pathname == "/Caffe_Mocha") {
    return (
      <div>

        <Dessert_Name urlname='/Caffe_Mocha' imgurl={Mocha_Coffee} name='CAFFÈ MOCHA' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Cafe_au_lait") {
    return (
      <div>

        <Dessert_Name urlname='/Cafe_au_lait' imgurl={Brownie} name='CAFÈ AU LAIT' price='450' />
      </div>
    )
  }
  else if (window.location.pathname == "/Cappuccino") {
    return (
      <div>

        <Dessert_Name urlname='/Cappuccino' imgurl={Brownie} name='CAPPUCCINO' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Double_espresso_(doppio)") {
    return (
      <div>

        <Dessert_Name urlname='/Double_espresso_(doppio)' imgurl={Brownie} name='DOUBLE ESPRESSO (DOPPIO)' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso") {
    return (
      <div>

        <Dessert_Name urlname='/Espresso' imgurl={Brownie} name='ESPRESSO' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso_con_panna") {
    return (
      <div>

        <Dessert_Name urlname='/Espresso_con_panna' imgurl={Brownie} name='ESPRESSO CON PANNA' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso_macchiato") {
    return (
      <div>

        <Dessert_Name urlname='/Espresso_macchiato' imgurl={Brownie} name='ESPRESSO MACCHIATO ' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Flat_white") {
    return (
      <div>

        <Dessert_Name urlname='/Flat_white' imgurl={Brownie} name='FLAT WHITE ' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Frappe") {
    return (
      <div>

        <Dessert_Name urlname='/Frappe' imgurl={Brownie} name='FRAPPÉ' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Iced_mocha") {
    return (
      <div>

        <Dessert_Name urlname='/Iced_mocha' imgurl={Brownie} name='ICED MOCHA' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Latte_macchiato") {
    return (
      <div>

        <Dessert_Name urlname='/Latte_macchiato' imgurl={Brownie} name='LATTE MACCHIATO' price='350' />
      </div>
    )
  }

}
export default Dessert_details;