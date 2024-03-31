import React from 'react';
import Celerio from '../assets/images/MarutiCelerioCar.webp';
import Dzire from '../assets/images/SuzukiDzireSedanCar.webp';
import Ertiga from '../assets/images/MarutiErtiga.jpg';
import EECO from '../assets/images/MarutiEecoCarSide.webp';
import {useNavigate} from 'react-router-dom';

const SUZUKIComp = () => {

    const navigate = useNavigate();

    function ertiga(){
        if(document.getElementById('SuzukiErtiga').title=="Suzuki Ertiga"){
             navigate("/CarDescriptionertiga");
         }
     }
 
         function dzire(){
         if(document.getElementById('SuzukiDzire').title=="Suzuki Dzire"){
             navigate("/CarDescriptiondzire");
         }
     }
 
         function celerio(){
         if(document.getElementById('SuzukiCelerio').title=="Suzuki Celerio"){
             navigate("/CarDescriptioncelerio");
         }
     }
 
         function eeco(){
         if(document.getElementById('SuzukiEECO').title=="Suzuki EECO"){
             navigate("/CarDescriptioneeco");
         }
     }
 
    return (
        <div>
        <div> 
            <h1>About SUZUKI</h1>
            <p>SUZUKI is a very big company.SUZUKI is a well known brand. It sold a number of cars in India</p>
            <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href=""><img src={Ertiga} title='Suzuki Ertiga' id="SuzukiErtiga" className='ertiga' onClick={ertiga}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "160px"}}><strong>Suzuki Ertiga</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>2 .</label> <br></br>
        <a href=""><img src={Dzire} title="Suzuki Dzire" id="SuzukiDzire" className='dzire' onClick={dzire}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "160px"}}><strong>Suzuki Dzire</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>3 .</label> <br></br>
        <a href=""><img src={Celerio} title='Suzuki Celerio' id="SuzukiCelerio" className='celerio' onClick={celerio}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "160px"}}><strong>Suzuki Celerio</strong></label><br></br><br></br>   
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>4 .</label><br></br> 
        <a href=""><img src={EECO} title='Suzuki EECO' id="SuzukiEECO" className='eeco' onClick={eeco}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "150px"}}><strong>Suzuki EECO</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default SUZUKIComp;
