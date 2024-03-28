import React from 'react';
import Thar from '../assets/images/MahindraTharImage2.jpg';
import bolero from '../assets/images/MahindraBoleroNeoCar.jpg';
import xuv700 from '../assets/images/MahindraXUV700Car.webp'
import tuv300 from '../assets/images/MahindraTUV300image.png';

const MahindraComp = () => {

    return (
        <div>
        <div><h1>About MAHINDRA</h1>
             <p>MAHINDRA is a very big company.MAHINDRA is a well known brand. It sold a number of cars in India</p>
        <label>1 .</label>                          
        </div>
        <div className='Image'>    
        <a href="/Mahindra/CarImagethar"><img src={Thar} title='Thar' id="Thar" className='Thar'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thar</strong></label><br></br><br></br>    
        <label>2 .</label> <br></br>
        <a href="/Mahindra/CarImagebolero"><img src={bolero} title="Bolero" id="Mahindra Bolero" className='bolero'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>Bolero</strong></label><br></br><br></br>    
        <label>3 .</label> <br></br>
        <a href="/Mahindra/CarImagexuv700"><img src={xuv700} title='XUV700' id="Mahindra  Celerio" className='xuv700'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "200px"}}><strong>XUV700</strong></label><br></br><br></br>   
        <label>4 .</label><br></br> 
        <a href="/Mahindra/CarImagetuv300"><img src={tuv300} title='TUV300' id="Mahindra  EECO" className='tuv300'></img></a>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <label style={{ float : "left", marginLeft: "150px"}}><strong>TUV300</strong></label><br></br><br></br>  
        {/* <label style={{ float : "left", marginLeft: "30px"}}>Nexon</label><br></br><br></br> */}
        </div>
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default MahindraComp;