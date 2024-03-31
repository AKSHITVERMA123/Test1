import React from 'react';
import Celerio from '../assets/images/MarutiCelerioCar.webp';
import '../components/style.css';

const SuzukiCelerioDescComp = () => {
    
    return (
        <div className="C1" style={{width: "100%"}}>
        <h1>Suzuki Celerio</h1>
        <img src={Celerio} alt="Suzuki Celerio" title='Suzuki Celerio' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Petrol</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>Up to 26.68 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>3695 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Hatchback</td>
          </tr>
          <tr>
            <td>NCAP Rating</td>
            <td>Not rated yet</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Starting from $XX,XXX</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td>Up to 155 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>90 Nm @ 3500 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>235 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Suzuki Celerio is a compact and fuel-efficient hatchback designed for city driving.</p>
      <p>With its practical design, frugal engine, and spacious interiors, the Suzuki Celerio offers a comfortable and economical driving experience.</p>
     </div>
    );
};

export default SuzukiCelerioDescComp;