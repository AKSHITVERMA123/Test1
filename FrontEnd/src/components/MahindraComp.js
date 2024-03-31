import React from 'react';
import Thar from '../assets/images/MahindraTharImage2.jpg';
import Bolero from '../assets/images/MahindraBoleroNeoCar.jpg';
import XUV700 from '../assets/images/MahindraXUV700Car.webp';
import TUV300 from '../assets/images/MahindraTUV300image.png';
import {useNavigate} from 'react-router-dom';

const MahindraComp = () => {

    const navigate = useNavigate();

    function thar(){
        if(document.getElementById('Thar').title=="Thar"){
             navigate("/CarDescriptionthar");
         }
     }
 
         function bolero(){
         if(document.getElementById('Bolero').title=="Bolero"){
             navigate("/CarDescriptionbolero");
         }
     }
 
         function xuv700(){
         if(document.getElementById('xuv700').title=="XUV700"){
             navigate("/CarDescriptionxuv");
         }
     }
 
         function tuv300(){
         if(document.getElementById('tuv300').title=="TUV300"){
             navigate("/CarDescriptiontuv");
         }
     }


    return (
        <div>
        <div><h1>About MAHINDRA</h1>
             <p>MAHINDRA is a very big company.MAHINDRA is a well known brand. It sold a number of cars in India</p>
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href=""><img src={Thar} title='Thar' id="Thar" className='Thar' onClick={thar}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Thar</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>2 .</label> <br></br>
        <a href=""><img src={Bolero} title="Bolero" id="Bolero" className='bolero' onClick={bolero}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Bolero</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>3 .</label> <br></br>
        <a href=""><img src={XUV700} title='XUV700' id="xuv700" className='xuv700' onClick={xuv700}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>XUV700</strong></label><br></br><br></br>   
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>4 .</label><br></br> 
        <a href=""><img src={TUV300} title='TUV300' id="tuv300" className='tuv300' onClick={tuv300}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "180px"}}><strong>TUV300</strong></label><br></br><br></br>  
        {/* <label style={{ float : "left", marginLeft: "30px"}}>Nexon</label><br></br><br></br> */}
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default MahindraComp;