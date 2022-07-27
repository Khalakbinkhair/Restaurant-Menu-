import React from 'react'
import '../Assets/css/style.css'
import Set_menu1 from '../Assets/images/Set_menu1.jpeg';
import Hotmeals_Name from './Hotmeals_name';
import Mocha_Coffee from '../Assets/images/Mocha-Coffee-6.jpg';


const Hotmeals_details = () => {
  if (window.location.pathname == "/Set_menu_1") {
    return (
      <div>

        <Hotmeals_Name urlname='/Set_menu_1' imgurl={Set_menu1} name='Set Menu 1' price='250' />
      </div>
    )
  }
  else if (window.location.pathname == "/Caffe_Mocha") {
    return (
      <div>

        <Hotmeals_Name urlname='/Caffe_Mocha' imgurl={Mocha_Coffee} name='CAFFÈ MOCHA' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Cafe_au_lait") {
    return (
      <div>

        <Hotmeals_Name urlname='/Cafe_au_lait' imgurl={Set_menu1} name='CAFÈ AU LAIT' price='450' />
      </div>
    )
  }
  else if (window.location.pathname == "/Cappuccino") {
    return (
      <div>

        <Hotmeals_Name urlname='/Cappuccino' imgurl={Set_menu1} name='CAPPUCCINO' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Double_espresso_(doppio)") {
    return (
      <div>

        <Hotmeals_Name urlname='/Double_espresso_(doppio)' imgurl={Set_menu1} name='DOUBLE ESPRESSO (DOPPIO)' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso") {
    return (
      <div>

        <Hotmeals_Name urlname='/Espresso' imgurl={Set_menu1} name='ESPRESSO' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso_con_panna") {
    return (
      <div>

        <Hotmeals_Name urlname='/Espresso_con_panna' imgurl={Set_menu1} name='ESPRESSO CON PANNA' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Espresso_macchiato") {
    return (
      <div>

        <Hotmeals_Name urlname='/Espresso_macchiato' imgurl={Set_menu1} name='ESPRESSO MACCHIATO ' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Flat_white") {
    return (
      <div>

        <Hotmeals_Name urlname='/Flat_white' imgurl={Set_menu1} name='FLAT WHITE ' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Frappe") {
    return (
      <div>

        <Hotmeals_Name urlname='/Frappe' imgurl={Set_menu1} name='FRAPPÉ' price='350' />
      </div>
    )
  }
  else if (window.location.pathname == "/Iced_mocha") {
    return (
      <div>

        <Hotmeals_Name urlname='/Iced_mocha' imgurl={Set_menu1} name='ICED MOCHA' price='350' />
      </div>
    )
  }

  else if (window.location.pathname == "/Latte_macchiato") {
    return (
      <div>

        <Hotmeals_Name urlname='/Latte_macchiato' imgurl={Set_menu1} name='LATTE MACCHIATO' price='350' />
      </div>
    )
  }

}
export default Hotmeals_details;