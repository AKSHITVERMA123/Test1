import React from 'react';
import Carens from '../assets/images/KIACarensCar2.png';
import Seltos from '../assets/images/KIASeltos.jpg';
import Carnival from '../assets/images/KIACarnivalImage.jpg'
import EV6 from '../assets/images/KIAEV6carimage.webp';

const KiaComp = () => {

    return (
        <div>
        <div>        
            <h1>About KIA</h1>
            <p>KIA is famous for its motors.KIA is a well known brand. It sold a number of cars in India</p>
        <label>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href="/Kia/CarImagecarens"><img src={Carens} title='Kia Carens' id="Kia Carens" className='Carens'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kia Carens</strong></label><br></br><br></br>    
        <label>2 .</label> <br></br>
        <a href="/Kia/CarImageseltos"><img src={Seltos} title='Kia Seltos' id="Kia Seltos" lassName='seltos'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Kia Seltos</strong></label><br></br><br></br>    
        <label>3 .</label> <br></br>
        <a href="/Kia/CarImagecarnival"><img src={Carnival} title='Kia Carnival' id="'Kia Carnival" lassName='carnival'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Kia Carnival</strong></label><br></br><br></br>   
        <label>4 .</label><br></br> 
        <a href="/Kia/CarImageev6"><img src={EV6} title='Kia EV6' id="Kia EV6" lassName='ev6'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "150px"}}><strong>Kia EV6</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default KiaComp;