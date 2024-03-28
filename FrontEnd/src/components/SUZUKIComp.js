import React from 'react';
import Celerio from '../assets/images/MarutiCelerioCar.webp';
import Dzire from '../assets/images/SuzukiDzireSedanCarSide.webp';
import Ertiga from '../assets/images/MarutiErtiga.jpg'
import EECO from '../assets/images/MarutiEecoCarSide.webp';

const SUZUKIComp = () => {

    return (
        <div>
        <div> 
            <h1>About SUZUKI</h1>
            <p>SUZUKI is a very big company.SUZUKI is a well known brand. It sold a number of cars in India</p>
            <label>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href="/Suzuki/CarImagecertiga"><img src={Ertiga} title='Nexon' id="Nexon" className='nexon'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nexon</strong></label><br></br><br></br>    
        <label>2 .</label> <br></br>
        <a href="/Suzuki/CarImagedzire"><img src={Dzire} title="TIAGO" id="Suzuki Dzire" className='dzire'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>TIAGO</strong></label><br></br><br></br>    
        <label>3 .</label> <br></br>
        <a href="/Suzuki/CarImagecelerio"><img src={Celerio} title='Punch' id="Suzuki Celerio" className='celerio'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Punch</strong></label><br></br><br></br>   
        <label>4 .</label><br></br> 
        <a href="/Suzuki/CarImageeeco"><img src={EECO} title='Suzuki EECO' id="Suzuki EECO" className='eeco'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "150px"}}><strong>TATA Tigor</strong></label><br></br><br></br>  
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default SUZUKIComp;
