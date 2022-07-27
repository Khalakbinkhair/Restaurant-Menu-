import React from 'react'
import '../Assets/css/style.css'
import CashewNut from '../Assets/images/cashewnut.jpg';
import Salad_Name from './Salad_name';
import Mocha_Coffee from '../Assets/images/Mocha-Coffee-6.jpg';

const Salad_details = () => {



    if (window.location.pathname == "/cashewNut") {


        return (
            <div>

                <Salad_Name urlname='/cashewNut' imgurl={CashewNut} name='CASHEW NUT SALAD' price='250' />
            </div>
        )
    }
    else if (window.location.pathname == "/Caffe_Mocha") {
        return (
            <div>

                <Salad_Name urlname='/Caffe_Mocha' imgurl={Mocha_Coffee} name='CAFFÈ MOCHA' price='350' />
            </div>
        )
    }
    else if (window.location.pathname == "/Cafe_au_lait") {
        return (
            <div>

                <Salad_Name urlname='/Cafe_au_lait' imgurl={CashewNut} name='CAFÈ AU LAIT' price='450' />
            </div>
        )
    }
    else if (window.location.pathname == "/Cappuccino") {
        return (
            <div>

                <Salad_Name urlname='/Cappuccino' imgurl={CashewNut} name='CAPPUCCINO' price='350' />
            </div>
        )
    }
    else if (window.location.pathname == "/Double_espresso_(doppio)") {
        return (
            <div>

                <Salad_Name urlname='/Double_espresso_(doppio)' imgurl={CashewNut} name='DOUBLE ESPRESSO (DOPPIO)' price='350' />
            </div>
        )
    }
    else if (window.location.pathname == "/Espresso") {
        return (
            <div>

                <Salad_Name urlname='/Espresso' imgurl={CashewNut} name='ESPRESSO' price='350' />
            </div>
        )
    }
    else if (window.location.pathname == "/Espresso_con_panna") {
        return (
            <div>

                <Salad_Name urlname='/Espresso_con_panna' imgurl={CashewNut} name='ESPRESSO CON PANNA' price='350' />
            </div>
        )
    }
    else if (window.location.pathname == "/Espresso_macchiato") {
        return (
            <div>

                <Salad_Name urlname='/Espresso_macchiato' imgurl={CashewNut} name='ESPRESSO MACCHIATO ' price='350' />
            </div>
        )
    }

    else if (window.location.pathname == "/Flat_white") {
        return (
            <div>

                <Salad_Name urlname='/Flat_white' imgurl={CashewNut} name='FLAT WHITE ' price='350' />
            </div>
        )
    }

    else if (window.location.pathname == "/Frappe") {
        return (
            <div>

                <Salad_Name urlname='/Frappe' imgurl={CashewNut} name='FRAPPÉ' price='350' />
            </div>
        )
    }
    else if (window.location.pathname == "/Iced_mocha") {
        return (
            <div>

                <Salad_Name urlname='/Iced_mocha' imgurl={CashewNut} name='ICED MOCHA' price='350' />
            </div>
        )
    }

    else if (window.location.pathname == "/Latte_macchiato") {
        return (
            <div>

                <Salad_Name urlname='/Latte_macchiato' imgurl={CashewNut} name='LATTE MACCHIATO' price='350' />
            </div>
        )
    }

}
export default Salad_details;