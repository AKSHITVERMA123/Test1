import React from 'react';
import '../components/style.css';
import Nexon from '../assets/images/TATANexonCar2.jpg';
import Tiago from '../assets/images/TATATiagoCar.jpg';

const CompareByLength = () => {

    return (
        <div>
            <div className="C1" style={{width: "100%"}}>
                <h1 id="Heading">Tata Nexon</h1>
                <img src={Nexon} alt="Tata Nexon car image" title='TATA Nexon' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car Length</td>
                            <td>4312 meter</td>
                        </tr>
                        </tbody>
                </table>

                <h1>Tata Tiago</h1>
                <img src={Tiago} alt="Tata Tiago car image" title='Tata Tiago' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car Length</td>
                            <td>3994 meter</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompareByLength;