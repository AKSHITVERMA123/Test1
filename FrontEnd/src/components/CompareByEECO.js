
import React from 'react';
import '../components/style.css';
import Celerio from '../assets/images/MarutiCelerioCar.webp';
import EECO from '../assets/images/MarutiEecoCarBlack.png';

const CompareByEECO = () => {
    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Maruti Celerio</h1>
                <img src={Celerio} id='ImageHeading' alt="Celerio car image" title='Maruti Celerio' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car Type</td>
                            <td>SUV</td>
                        </tr>
                        </tbody>
                </table>

                <h1>Maruti EECO</h1>
                <img src={EECO} alt='Maruti EECO' title='TMaruti EECO' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car Type</td>
                            <td>SUV</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompareByEECO;