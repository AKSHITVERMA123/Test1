import React from 'react';
import Octivia from '../assets/images/SkodaOctiviaCar.jpg';
import Kushaq from '../assets/images/SkodaKushaqCarImageRed.jpg';
import Kodiaq from '../assets/images/SkodaKodiaqCar.webp';
import Slavia from '../assets/images/SkodaSlaviaCar1.jpg';
import { useNavigate } from 'react-router-dom';

const SkodaComp = () => {
  
    const navigate = useNavigate();

    function octivia(){
        if(document.getElementById('SkodaOctivia').title=="Skoda Octivia"){
             navigate("/CarDescriptionoctivia");
         }
     }
 
         function slavia(){
         if(document.getElementById('SkodaSlavia').title=="Skoda Slavia"){
             navigate("/CarDescriptionSlavia");
         }
     }
 
         function kodiaq(){
         if(document.getElementById('SkodaKodiaq').title=="Skoda Kodiaq"){
             navigate("/CarDescriptionKodiaq");
         }
     }
 
         function kushaq(){
         if(document.getElementById('SkodaKushaq').title=="Skoda Kushaq"){
             navigate("/CarDescriptionkushaq");
         }
     }
    return (
        <div>
        <div>
            <h1>About SKODA</h1>
            <p>SKODA is a very big company.SKODA is a well known brand. It sold a number of cars in India</p>
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href=""><img src={Octivia} title='Skoda Octivia' id="SkodaOctivia" className='Octivia' onClick={octivia}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Octivia</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>2 .</label> <br></br>
        <a href=""><img src={Kushaq} title="Skoda Kushaq" id="SkodaKushaq" className='Kushaq' onClick={kushaq}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Kushaq</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>3 .</label> <br></br>
        <a href=""><img src={Kodiaq} title='Skoda Kodiaq' id="SkodaKodiaq" className='Kodiaq' onClick={kodiaq}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Kodiaq</strong></label><br></br><br></br>   
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>4 .</label><br></br> 
        <a href=""><img src={Slavia} title='Skoda Slavia' id="SkodaSlavia" className='Slavia' onClick={slavia}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Slavia</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default SkodaComp;