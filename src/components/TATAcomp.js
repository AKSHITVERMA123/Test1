import React from 'react';
import FooterComp from './FooterComp';
import style from '../assets/css/style.css';
import Nexon from '../assets/images/NexonCar2.jpg';
import TIAGO from '../assets/images/TATATiago.jpg';
import TATATiago from '../assets/images/TATATiagoCar.jpg'
import Punch from '../assets/images/TATAPunch1.jpg';
//import CarImage from '../components/CarImageComp';
const TATAcomp = () => {
    return (
        <>
        <div> 
            <h1>About TATA</h1>
            <p>TATA is a very big company.TATA is a well known brand. It sold a number of cars in India</p>
            <label>1 .</label>                          
            </div>
        <div className='Image'>
            
        <a href="/TATA/CarImage"><img src={Nexon} title='Nexon' id="Nexon" className='nexon'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nexon</strong></label><br></br><br></br>    
        <label>2 .</label> <br></br>
        <img src={TIAGO} title="TIAGO" id="Tiago" style={{height: "250px", width:"400px"}}></img>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "120px"}}><strong>TIAGO</strong></label><br></br><br></br>    
        <label>3 .</label> <br></br>
        <img src={Punch} title='Punch' id="Punch"></img>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "120px"}}><strong>Punch</strong></label><br></br><br></br>   
        <label>4 .</label><br></br> 
        <img src={TATATiago} title='TATATiago' id="TATATiago"></img>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "110px"}}><strong>TATA Tiago</strong></label><br></br><br></br>  
        {/* <label style={{ float : "left", marginLeft: "30px"}}>Nexon</label><br></br><br></br> */}
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </>
    )
}

export default TATAcomp;
