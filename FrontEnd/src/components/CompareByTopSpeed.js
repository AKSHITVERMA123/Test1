import React from 'react';
import '../components/style.css';
import Altroz from '../assets/images/TATAAltrozCarFront.webp';
import Tiago from '../assets/images/TATATiagoCar.jpg';
import Tigor from '../assets/images/TataTigorCar.jpg';
import Nexon from '../assets/images/NexonCar.jpg';
import Punch from '../assets/images/TATAPunchCar1.jpg';

const CompareByTopSpeed = (props) => {

    function CarName () {
        var name=props.name;
        return name;
    }

    function Carimg(name) {
        let img;
          
        if(name=='Tata Altroz'){
            img=Altroz;
        }
        else if(name=='Tata Tiago'){
            img=Tiago;
        }
        else if(name=='Tata Tigor'){
            img=Tigor;
        }
        else if(name=='Tata Punch'){
            img=Punch;
        }

        return img;
    }

    return (
            <div className="C1" style={{width: "100%"}}>
                <h1 id="Heading">Tata Nexon</h1>
                <img src={Nexon} alt="Nexon car image" title='TATA Nexon' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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
                <img src={Carimg(CarName())} alt={Carimg(CarName()) +"car image"} title={CarName()} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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
    )
}

export default CompareByTopSpeed;
