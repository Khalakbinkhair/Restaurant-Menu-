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
import Footer from './Components/Footer'
import Header from './Components/Header'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Header />  {/* About The Footer */} 
   <Router>
      <Routes>
        
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
        <Route  exact path="/Iced_latte" element={<Coffee_details />} />
        <Route  exact path="/Freakshake" element={<Coffee_details />} />
        <Route  exact path="/Cold_brew_coffee" element={<Coffee_details />} />

    
        
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
