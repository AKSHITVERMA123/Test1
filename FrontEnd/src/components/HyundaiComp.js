import React from 'react';
import I20 from '../assets/images/HyundaiI20Car1.jpg';
import Venue from '../assets/images/HyundaiVenue1.jpg';
import Verna from '../assets/images/Hyundai_VernaImage1.jpg';
import Creta from '../assets/images/HyundaiCreta1.jpg';
import { useNavigate } from 'react-router-dom';

const HyundaiComp = () => {

    const navigate = useNavigate();

    function creta(){
        if(document.getElementById('creta').title=="creta"){
             navigate("/CarDescriptioncreta");
         }
     }
 
         function i20(){
         if(document.getElementById('i20').title=="i20"){
             navigate("/CarDescriptioni20");
         }
     }
 
     function venue(){
        if(document.getElementById('Venue').title=="Venue"){
            navigate("/CarDescriptionvenue");
        }
    }

         function verna(){
         if(document.getElementById('Verna').title=="Verna"){
             navigate("/CarDescriptionverna");
         }
     }
 

    return (
        <div>
        <div> 
            <h1>About HYUNDAI</h1>
            <p>HYUNDAI is a very big company.HYUNDAI is a well known brand. It sold a number of cars in India</p>
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href=""><img src={Creta} title='creta' id="creta" className='creta' onClick={creta}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "170px"}}><strong>Hyundai Creta</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>2 .</label> <br></br>
        <a href=""><img src={I20} title='i20' id="i20" className='i20' onClick={i20}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "170px"}}><strong>Hyundai i20</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>3 .</label> <br></br>
        <a href=""><img src={Venue} title="Venue" id="Venue" className='Venue' onClick={venue}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "170px"}}><strong>Hyundai Venue</strong></label><br></br><br></br>   
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>4 .</label><br></br> 
        <a href=""><img src={Verna} title='Verna' id="Verna" className='Verna' onClick={verna}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "170px"}}><strong>Hyundai Verna</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default HyundaiComp;
