import React from 'react';
import Nexon from '../assets/images/NexonCar2.jpg';
import TIAGO from '../assets/images/TATATiago.jpg';
import TATATigor from '../assets/images/TATATigorCarEV.webp';
import Punch from '../assets/images/TATAPunch1.jpg';
import { useNavigate } from  'react-router-dom';

const TATAcomp = () => {

    const navigate = useNavigate();

    function nexon(){
       if(document.getElementById('Nexon').title=="Nexon"){
            navigate("/CarDescription");
        }
    }

        function tiago(){
        if(document.getElementById('Tiago').name=="tiago"){
            navigate("/CarDescriptionTiago");
        }
    }

        function tigor(){
        if(document.getElementById('TATATigor').title=="TATATigor"){
            navigate("/CarDescriptionTigor");
        }
    }

        function punch(){
        if(document.getElementById('Punch').title=="Punch"){
            navigate("/CarDescriptionPunch");
        }
    }

    return (
        <div>
        <div> 
            <h1>About TATA</h1>
            <p>TATA is a very big company.TATA is a well known brand. It sold a number of cars in India</p>
            <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href=""><img src={Nexon} title='Nexon' id="Nexon" className='nexon' onClick={nexon}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nexon</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>2 .</label> <br></br>
        <a href=""><img src={TIAGO} title="TIAGO" id="Tiago" name='tiago' onClick={tiago}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>TIAGO</strong></label><br></br><br></br>    
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>3 .</label> <br></br>
        <a href=""><img src={Punch} title='Punch' id="Punch" onClick={punch}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Punch</strong></label><br></br><br></br>   
        <label style={{fontSize : "x-large", fontFamily : 'sans-serif'}}>4 .</label><br></br> 
        <a href=""><img src={TATATigor} title='TATATigor' id="TATATigor" onClick={tigor}></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "150px"}}><strong>TATA Tigor</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default TATAcomp;
