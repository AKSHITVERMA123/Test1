import React from 'react';
import Octivia from '../assets/images/SkodaOctiviaCar.jpg';
import Kushaq from '../assets/images/SkodaKushaqCarImageRed.jpg';
import Kodiaq from '../assets/images/SkodaKodiaqCar.webp'
import Slavia from '../assets/images/SkodaSlaviaCar1.jpg';

const SkodaComp = () => {

    return (
        <div>
        <div> 
            <h1>About SKODA</h1>
            <p>SKODA is a very big company.SKODA is a well known brand. It sold a number of cars in India</p>
        <label>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href="Skoda/CarImageoctivia"><img src={Octivia} title='Skoda Octivia' id="Skoda Octivia" className='nexon'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nexon</strong></label><br></br><br></br>    
        <label>2 .</label> <br></br>
        <a href="/Skoda/CarImagekushaq"><img src={Kushaq} title="Skoda Kushaq" id="Skoda Kushaq"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>TIAGO</strong></label><br></br><br></br>    
        <label>3 .</label> <br></br>
        <a href="/Skoda/CarImagekodiaq"><img src={Kodiaq} title='Skoda Kodiaq' id="Skoda Kodiaq"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Punch</strong></label><br></br><br></br>   
        <label>4 .</label><br></br> 
        <a href="/Skoda/CarImageslavia"><img src={Slavia} title='Skoda Slavia' id="Skoda Slavia"></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "150px"}}><strong>TATA Tigor</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default SkodaComp;