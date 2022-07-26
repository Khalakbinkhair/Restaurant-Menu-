import React from 'react'
import '../Assets/css/style.css'
import hotmeals from '../Assets/images/hotmeals.jpg';
import coffee from '../Assets/images/coffee.jpg';
import dessert from '../Assets/images/dessert.jpg';
import breakfast from '../Assets/images/breakfast.jpg';
import salad from '../Assets/images/salad.jpg';
import Menu_card from './Menu_card';




const Items=()=>{

    return(
<div>

        <div class='row'style={{"padding":"1rem"}} >

              <div class="col-md-6" >
                <button type="button" class="btn btn-secondary">MAIN MENU</button>
              </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-secondary">SIDE MENU</button>
            </div>
       </div>


     
      

            <div class='row' >
             <div class="col-md-4 " style={{"padding":"1rem"}}>  
               <Menu_card urlname="/coffee" imgurl={coffee} name="COFFEE"/>
             </div>
            <div class="col-md-4 " style={{"padding":"1rem"}}>  
              <Menu_card urlname="/hotmeals" imgurl={hotmeals} name="HOTMEALS"/>
            </div>
            <div class="col-md-4 " style={{"padding":"1rem"}}>  
              <Menu_card urlname="/breakfast" imgurl={breakfast} name="BREAKFAST"/>
            </div>
            <div class="col-md-4 " style={{"padding":"1rem"}}>  
              <Menu_card urlname="/salad" imgurl={salad} name="SALAD"/>
            </div>
            <div class="col-md-4 " style={{"padding":"1rem"}}>  
              <Menu_card urlname="/dessert" imgurl={dessert} name="DESSERT"/>
            </div>     


          




</div>
</div>



)
}
export default Items;