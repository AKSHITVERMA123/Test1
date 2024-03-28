import React from 'react';
import '../components/style.css';
import CarImg from '../assets/images/TATANexonCar2.jpg';
import Tiago from '../assets/images/TATATiagoCar.jpg';

const CompareByBootSpace = () => {
    return (
        <div>
            <div className="C1" style={{width: "100%"}}>
                <h1 id="Heading">Car Tata Nexon</h1>
                <img src={CarImg} alt="Nexon car image" title='TATA Nexon' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car BootSpace is</td>
                            <td></td>
                        </tr>
                        </tbody>
                </table>

                <h1>Ertiga</h1>
                <img src={Tiago} alt="Tiago car image" title='Tata Tiago' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car BootSpace is</td>
                            <td></td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompareByBootSpace;
