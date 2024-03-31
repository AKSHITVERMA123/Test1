import React from 'react';
import Carens from '../assets/images/KIACarensCar2.png';
import Seltos from '../assets/images/KIASeltos.jpg';
import Carnival from '../assets/images/KIACarnivalImage.jpg';
import EV6 from '../assets/images/KIAEV6carimage.webp';
import {useNavigate} from 'react-router-dom';

const KiaComp = () => {

    const navigate = useNavigate();

    function carens(){
        if(document.getElementById('KiaCarens').title=="Kia Carens"){
             navigate("/CarDescriptioncarens");
         }
     }
 
         function seltos(){
         if(document.getElementById('KiaSeltos').title=="Kia Seltos"){
             navigate("/CarDescriptionseltos");
         }
     }
 
         function carnival(){
         if(document.getElementById('KiaCarnival').title=="Kia Carnival"){
             navigate("/CarDescriptioncarnival");
         }
     }
 
         function ev6(){
         if(document.getElementById('KiaEV6').title=="Kia EV6"){
             navigate("/CarDescriptionev6");
         }
     }

    return (
        <div>
        <div>        
            <h1>About KIA</h1>
            <p>KIA is famous for its motors.KIA is a well known brand. It sold a number of cars in India</p>
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href=""><img src={Carens} title='Kia Carens' id="KiaCarens" className='Carens' onClick={carens}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "190px"}}><strong>Kia Carens</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>2 .</label> <br></br>
        <a href=""><img src={Seltos} title='Kia Seltos' id="KiaSeltos" className='seltos' onClick={seltos} ></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "180px"}}><strong>Kia Seltos</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>3 .</label> <br></br>
        <a href=""><img src={Carnival} title='Kia Carnival' id="KiaCarnival" className='carnival' onClick={carnival}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "170px"}}><strong>Kia Carnival</strong></label><br></br><br></br>   
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>4 .</label><br></br> 
        <a href=""><img src={EV6} title='Kia EV6' id="KiaEV6" className='ev6' onClick={ev6}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "180px"}}><strong>Kia EV6</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default KiaComp;