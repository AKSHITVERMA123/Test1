import React from 'react';
import '../components/style.css';
import Ertiga from '../assets/images/MarutiErtiga.jpg';
import Dzire from '../assets/images/SuzukiDzireSedanCar.webp';
import EECO from '../assets/images/MarutiEecoCar.webp';
import eeco from '../assets/images/MarutiEecoCarBlack.png';
import Celerio from '../assets/images/MarutiCelerioCar.webp';

const CompareByMileage = (props) => {

    function CarName(){
        var val=props.name;
        //  val=val.toString();
            console.log(val);
        //document.getElementById("Heading")=val
            //;
            return val;
    }

    function Carimg(val){
        let img;
        if(val=='Suzuki Ertiga'){
            img=Ertiga;
        }
        else if(val=='Suzuki Dzire'){
            img=Dzire;
        }
        else if(val == "Suzuki EECO"){
            img=EECO;
        }
        else if(val == "Maruti Suzuki EECO"){
            img=eeco;
        }
        return img;
}

    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Suzuki Celerio</h1>
                <img src={Celerio} id='ImageHeading' alt="Nexon car image" title='TATA Nexon' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

                <h1>{CarName()}</h1>
                <img src={Carimg(CarName())} alt={CarName()} title={CarName()} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

export default CompareByMileage;

