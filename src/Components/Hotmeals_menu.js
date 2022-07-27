import React from 'react'
import '../Assets/css/style.css'
import { Link } from "react-router-dom";



const Hotmeals_menu = (props) => {
    return (
        <div>



            <div class="card body ">
                <Link to={props.urlname} className="link" >{props.name}</Link>
            </div>





        </div>



    )
}
export default Hotmeals_menu;