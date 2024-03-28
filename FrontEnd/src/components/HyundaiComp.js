import React from 'react';
import i20 from '../assets/images/HyundaiI20Car1.jpg';
import Venue from '../assets/images/HyundaiVenue1.jpg';
import Verna from '../assets/images/Hyundai_VernaImage1.jpg'
import creta from '../assets/images/HyundaiCreta1.jpg';

const HyundaiComp = () => {

    return (
        <div>
        <div> 
            <h1>About HYUNDAI</h1>
            <p>HYUNDAI is a very big company.HYUNDAI is a well known brand. It sold a number of cars in India</p>
        <label>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href="/Hyundai/CarImagei20"><img src={i20} title='i20' id="i20" className='i20'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyundai i20</strong></label><br></br><br></br>    
        <label>2 .</label> <br></br>
        <a href="/Hyundai/CarImagevenue"><img src={Venue} title="Venue" id="Venue"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Hyundai Venue</strong></label><br></br><br></br>    
        <label>3 .</label> <br></br>
        <a href="/Hyundai/CarImagecreta"><img src={creta} title='Creta' id="Creta"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Hyundai Creta</strong></label><br></br><br></br>   
        <label>4 .</label><br></br> 
        <a href="/Hyundai/CarImageverna"><img src={Verna} title='Verna' id="Verna"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "150px"}}><strong>Hyundai Verna</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default HyundaiComp;
