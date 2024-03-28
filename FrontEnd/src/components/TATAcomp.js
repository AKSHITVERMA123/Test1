import React from 'react';
import Nexon from '../assets/images/NexonCar2.jpg';
import TIAGO from '../assets/images/TATATiago.jpg';
import TATATigor from '../assets/images/TATATigorCarEV.webp'
import Punch from '../assets/images/TATAPunch1.jpg';

const TATAcomp = () => {

    return (
        <div>
        <div> 
            <h1>About TATA</h1>
            <p>TATA is a very big company.TATA is a well known brand. It sold a number of cars in India</p>
            <label>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href="/TATA/CarImagenexon"><img src={Nexon} title='Nexon' id="Nexon" className='nexon'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nexon</strong></label><br></br><br></br>    
        <label>2 .</label> <br></br>
        <a href="/TATA/CarImagetiago"><img src={TIAGO} title="TIAGO" id="Tiago"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>TIAGO</strong></label><br></br><br></br>    
        <label>3 .</label> <br></br>
        <a href="/TATA/CarImagepunch"><img src={Punch} title='Punch' id="Punch"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Punch</strong></label><br></br><br></br>   
        <label>4 .</label><br></br> 
        <a href="/TATA/CarImagetigor"><img src={TATATigor} title='TATATigor' id="TATATigor"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "150px"}}><strong>TATA Tigor</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default TATAcomp;
