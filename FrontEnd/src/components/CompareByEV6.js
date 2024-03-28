import React from 'react';
import '../components/style.css';
import Tiago from '../assets/images/TataTigorCar.jpg';
import carens from '../assets/images/KIACarensCarBlue.jpg';
import EV6 from '../assets/images/KIAEV6car.jpg';
// import firstSelectOptions from './MainComp';

const CompareByEV6 = (props) => {
    
    // const firstSelectOptions = ['Nexon' ,'Celerio', 'Thar', 'i20', 'Octivia' , 'Carens'];
    
    function CarName(){
    var val=props.name;
        console.log(val);
        return val;
}
    function Carimg(val){
        let img;
        if(val=='Kia Carens'){
            img=carens;
        }
        else if(val=='Tata Tiago'){
            img=Tiago;
        }
        return img;
}

    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading" defaultValue='KiaCarens'>{CarName()}</h1>
                <img src={Carimg(CarName())} id='ImageHeading' alt="Kia Carens car image" title='Kia Carens' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car {props.attr}</td>
                            <td>{props.val}</td>
                        </tr>
                        </tbody>
                </table>

                <h1>Kia EV6</h1>
                <img src={EV6} alt='Kia EV6' title='Kia EV6' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car {props.attr}</td>
                            <td>{props.val}</td>
                        </tr>
                        </tbody>
                </table>
          </div>
     </div>
  )
}

export default CompareByEV6;
