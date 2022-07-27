import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useHistory } from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Components/Home';
import Coffee from './Components/Coffee'
import Coffee_details from './Components/Coffee_details'
import Hotmeals from './Components/Hotmeals'
import Hotmeals_details from './Components/Hotmeals_details'
import Breakfast from './Components/Breakfast'
import Breakfast_details from './Components/Breakfast_details'
import Salad from './Components/Salad'
import Salad_details from './Components/Salad_details'
import Dessert from './Components/Dessert'
import Dessert_details from './Components/Dessert_details'
import Footer from './Components/Footer'
import Header from './Components/Header'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Header />  {/* About The Footer */} 
   <Router>
      <Routes>
        {/* Coffee Routers */}
        <Route  exact path="/" element={<Home />} />
        <Route  exact path="/coffee" element={<Coffee />} />
        <Route  exact path="/coffee_details" element={<Coffee_details />} />
        <Route  exact path="/Caffe_Latte" element={<Coffee_details />} />
        <Route  exact path="/Caffe_Mocha" element={<Coffee_details />} />
        <Route  exact path="/Cafe_au_lait" element={<Coffee_details />} />
        <Route  exact path="/Cappuccino" element={<Coffee_details />} />
        <Route  exact path="/Double_espresso_(doppio)" element={<Coffee_details />} />
        <Route  exact path="/Espresso" element={<Coffee_details />} />
        <Route  exact path="/Espresso_con_panna" element={<Coffee_details />} />
        <Route  exact path="/Espresso_macchiato" element={<Coffee_details />} />
        <Route  exact path="/Flat_white" element={<Coffee_details />} />
        <Route  exact path="/Frappe" element={<Coffee_details />} />
        <Route  exact path="/Iced_mocha" element={<Coffee_details />} />
        <Route  exact path="/Latte_macchiato" element={<Coffee_details />} />
 
        {/* Hotmeals Routers */}
        <Route  exact path="/Hotmeals" element={<Hotmeals />} />
        <Route  exact path="/Hotmeals_details" element={<Hotmeals_details />} />
        <Route  exact path="/Set_menu_1" element={<Hotmeals_details />} />
        <Route  exact path="/Caffe_Mocha" element={<Hotmeals_details />} />
        <Route  exact path="/Cafe_au_lait" element={<Hotmeals_details />} />
        <Route  exact path="/Cappuccino" element={<Hotmeals_details />} />
        <Route  exact path="/Double_espresso_(doppio)" element={<Hotmeals_details />} />
        <Route  exact path="/Espresso" element={<Hotmeals_details />} />
        <Route  exact path="/Espresso_con_panna" element={<Hotmeals_details />} />
        <Route  exact path="/Espresso_macchiato" element={<Hotmeals_details />} />
        <Route  exact path="/Flat_white" element={<Hotmeals_details />} />
        <Route  exact path="/Frappe" element={<Hotmeals_details />} />
        <Route  exact path="/Iced_mocha" element={<Hotmeals_details />} />
        <Route  exact path="/Latte_macchiato" element={<Hotmeals_details />} />
    
          {/* Breakfast Routers */}
        <Route  exact path="/Breakfast" element={<Breakfast />} />
        <Route  exact path="/Breakfast_details" element={<Breakfast_details />} />
        <Route  exact path="/pancake" element={<Breakfast_details />} />
        <Route  exact path="/Caffe_Mocha" element={<Breakfast_details />} />
        <Route  exact path="/Cafe_au_lait" element={<Breakfast_details />} />
        <Route  exact path="/Cappuccino" element={<Breakfast_details />} />
        <Route  exact path="/Double_espresso_(doppio)" element={<Breakfast_details />} />
        <Route  exact path="/Espresso" element={<Breakfast_details />} />
        <Route  exact path="/Espresso_con_panna" element={<Breakfast_details />} />
        <Route  exact path="/Espresso_macchiato" element={<Breakfast_details />} />
        <Route  exact path="/Flat_white" element={<Breakfast_details />} />
        <Route  exact path="/Frappe" element={<Breakfast_details />} />
        <Route  exact path="/Iced_mocha" element={<Breakfast_details />} />
        <Route  exact path="/Latte_macchiato" element={<Breakfast_details />} />

           {/* Salad Routers */}
        <Route  exact path="/Salad" element={<Salad />} />
        <Route  exact path="/Salad_details" element={<Salad_details />} />
        <Route  exact path="/cashewNut" element={<Salad_details />} />
        <Route  exact path="/Caffe_Mocha" element={<Salad_details />} />
        <Route  exact path="/Cafe_au_lait" element={<Salad_details />} />
        <Route  exact path="/Cappuccino" element={<Salad_details />} />
        <Route  exact path="/Double_espresso_(doppio)" element={<Salad_details />} />
        <Route  exact path="/Espresso" element={<Salad_details />} />
        <Route  exact path="/Espresso_con_panna" element={<Salad_details />} />
        <Route  exact path="/Espresso_macchiato" element={<Salad_details />} />
        <Route  exact path="/Flat_white" element={<Salad_details />} />
        <Route  exact path="/Frappe" element={<Salad_details />} />
        <Route  exact path="/Iced_mocha" element={<Salad_details />} />
        <Route  exact path="/Latte_macchiato" element={<Salad_details />} />

         {/* Dessert Routers */}
        <Route  exact path="/Dessert" element={<Dessert />} />
        <Route  exact path="/Dessert_details" element={<Dessert_details />} />
        <Route  exact path="/brownie" element={<Dessert_details />} />
        <Route  exact path="/Caffe_Mocha" element={<Dessert_details />} />
        <Route  exact path="/Cafe_au_lait" element={<Dessert_details />} />
        <Route  exact path="/Cappuccino" element={<Dessert_details />} />
        <Route  exact path="/Double_espresso_(doppio)" element={<Dessert_details />} />
        <Route  exact path="/Espresso" element={<Dessert_details />} />
        <Route  exact path="/Espresso_con_panna" element={<Dessert_details />} />
        <Route  exact path="/Espresso_macchiato" element={<Dessert_details />} />
        <Route  exact path="/Flat_white" element={<Dessert_details />} />
        <Route  exact path="/Frappe" element={<Dessert_details />} />
        <Route  exact path="/Iced_mocha" element={<Dessert_details />} />
        <Route  exact path="/Latte_macchiato" element={<Dessert_details />} />

    
    </Routes>
    </Router>   
    <br/>
    <Footer />  {/* About The Footer */} 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
