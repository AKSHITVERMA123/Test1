import React from 'react';
import Ertiga  from '../assets/images/MarutiErtiga.jpg';
import '../components/style.css';

const SuzukiErtigaDescComp = () => {
  
    return (
        <div className="C1" style={{width: "100%"}}>
      <h1>Suzuki Ertiga</h1>
      <img src={Ertiga} alt="Suzuki Ertiga" title='Suzuki Ertiga' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Up to 19.01 kmpl (Petrol)<br/>Up to 26.08 kmpl (Diesel)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4395 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Sedan</td>
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
            <td>138 Nm @ 4400 rpm (Petrol)<br/>200 Nm @ 1750 rpm (Diesel)</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>209 liters (3rd row up), 550 liters (3rd row down)</td>
          </tr>
        </tbody>
      </table>
      <p>The Suzuki Ertiga is a versatile and spacious MPV designed for family outings and urban commutes.</p>
      <p>With its comfortable seating, efficient engines, and flexible interiors, the Suzuki Ertiga offers a practical and enjoyable driving experience.</p>
    </div>
  );
};

export default SuzukiErtigaDescComp;
