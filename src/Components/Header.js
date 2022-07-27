import React from 'react'
import '../Assets/css/style.css'
import backgroundpic from '../Assets/images/restrologo.jpg';
import spoonlogo from '../Assets/images/spoonlogo.png';

const Header = () => {


    return (
        <div>

            <div className="home-background">
                <img src={backgroundpic} />
            </div>

            <div className="spoon-logo">
                <img src={spoonlogo} />
            </div>


        </div>
    )
}
export default Header;