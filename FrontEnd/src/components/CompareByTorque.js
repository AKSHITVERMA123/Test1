import React from 'react';
import '../components/style.css';
import i20 from '../assets/images/HyundaiI20Car.jpg';
import Venue from '../assets/images/HyundaiVenue1.jpg';
import Creta from '../assets/images/HyundaiCretaImage.jpg';
import Verna from '../assets/images/Hyundai_VernaImageCar.jpg';

const CompareByTorque = (props) => {
   
    function Carname () {
        var name=props.name;
        return name;
    }

    function Carimg(name) {
        let img;  
        if(name=='Hyundai Creta'){
            img=Creta;
        }
        else if(name=='Hyundai Venue'){
            img=Venue;
        }
        else if(name=='Hyundai Verna'){
            img=Verna;
        }
        return img;
    }

    return (
        <div>
            <div className="C1" style={{width: "100%"}}>
                <h1 id="Heading">Hyundai I20</h1>
                <img src={i20} alt="Hyundai I20 car image" title='Hyundai I20' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

                <h1>{props.name}</h1>
                <img src={Carimg(Carname())} alt={Carname() + "car image"} title={Carname()} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

export default CompareByTorque;