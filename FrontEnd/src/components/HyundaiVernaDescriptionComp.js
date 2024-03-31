import React from 'react';
import Verna from '../assets/images/Hyundai_VernaImage1.jpg';
import '../components/style.css';

const HyundaiVernaDescriptionComp = () => {
    
    return (
      <div className="C1" style={{width: "100%"}}>
      <h1>Hyundai Verna</h1>
      <img src={Verna} alt="Hyundai Verna" title='Hyundai Verna' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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
            <td>17 kmpl to 25 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4440 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Sedan</td>
          </tr>
          <tr>
            <td>NCAP Rating</td>
            <td>4 Stars</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Starting from $XX,XXX</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td>200 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>250 Nm @ 1500-3000 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>480 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Hyundai Verna is a stylish and sophisticated sedan designed for comfort and performance.</p>
      <p>With its fuel-efficient engines, spacious interiors, and advanced safety features, the Hyundai Verna offers a luxurious driving experience.</p>
    </div>
  );
} 

export default HyundaiVernaDescriptionComp;