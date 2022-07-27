import React from 'react'
import { Link } from "react-router-dom";



const Hotmeals_name = (props) => {


  return (
    <div>

      <div class="container fluid">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <div class="card table-responsive">
              <div class="card-header"><b>NORTH END COFFEE</b></div>



              <div class="card-body" >

                <div class='row' style={{ "padding": "1rem" }} >

                  <div class="col-md-12 ">
                    <Link to="/hotmeals">
                      <button type="button" class="btn exit-button"><img src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png" /></button>
                    </Link>
                  </div>

                </div>





                

                    <Link to={props.urlname}> </Link>
                    <img className='img-component' src={props.imgurl} />

<br/>
                    Item Name: {props.name} <br />
                    Price: {props.price}<br />
                    Quantity:




                    <div class="col-md-12 " style={{ "padding": "1rem" }}>
                      <Link to="/">
                        <button type="submit" class="btn btn-secondary">Place Order</button>
                      </Link>
                    </div>




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   

  )
}
export default Hotmeals_name;