import React from 'react';
import Carens from '../assets/images/KIACarensCar2.png';
import '../components/style.css';

const KIACarensDescriptionComp = () => {

    return (
            <div className="C1" style={{width: "100%"}}>
                <h1>Kia Carens</h1>
                <img src={Carens} alt="Kia Carens" title='Kia Carens' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
                <table border="4" align='center'>
                <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                </thead>
                <tbody>
                <tr>
                <td>Fuel Type</td>
                <td>Petrol / Diesel</td>
                </tr>
                <tr>
                <td>Mileage</td>
                <td>14 kmpl to 20 kmpl</td>
                </tr>
                <tr>
                <td>Length</td>
                <td>4525 mm</td>
                </tr>
                <tr>
                <td>Type</td>
                <td>MPV</td>
                </tr>
                <tr>
                <td>NCAP Rating</td>
                <td>5 Stars</td>
                </tr>
                <tr>
                <td>Cost</td>
                <td>Starting from $XX,XXX</td>
                </tr>
                <tr>
                <td>Top Speed</td>
                <td>185 km/h</td>
                </tr>
                <tr>
                <td>Torque</td>
                <td>320 Nm @ 1500-2750 rpm</td>
                </tr>
                <tr>
                <td>Boot Space</td>
                <td>600 liters</td>
                </tr>
                </tbody>
                </table>
            <p>The Kia Carens is a versatile and spacious MPV designed for families.</p>
            <p>With its comfortable seating, ample cargo space, and advanced safety features, the Kia Carens provides a smooth and enjoyable driving experience.</p>
            </div>
  );
}
export default KIACarensDescriptionComp;