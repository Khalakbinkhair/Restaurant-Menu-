import React from 'react'
import Items from './Items'
import '../Assets/css/style.css'


const Card=()=>{
    return(
<div>

        <div class="container fluid">
        <div class="row justify-content-center">
        <div class="col-md-8 text-center">
        <div class="card table-responsive">
        <div class="card-header"><b>NORTH END COFFEE</b></div>

        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-secondary">search</button>
       </div>

<div class="card-body" >





<Items />  {/*About The Items of Car*/}


</div>
</div>
</div>
</div>
</div>


</div>

  
)
}
export default Card;