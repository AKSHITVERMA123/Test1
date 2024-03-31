import React from 'react';
import Kushaq from '../assets/images/SkodaKushaqCarImageRed.jpg';
import '../components/style.css';

const SkodaKushaqDescriptionComp = () => {
    
    return (
      <div className="C1" style={{width: "100%"}}>
      <h1>Skoda Kushaq</h1>
      <img src={Kushaq} alt="Skoda Kushaq" title='Skoda Kushaq' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Up to 17.88 kmpl (Petrol)<br/>Up to 21.35 kmpl (Diesel)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4225 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Compact SUV</td>
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
            <td>Up to 185 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>175 Nm @ 1750-4000 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>385 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Skoda Kushaq is a stylish and compact SUV designed for urban adventures.</p>
      <p>With its efficient engines, comfortable interiors, and modern features, the Skoda Kushaq offers a dynamic driving experience in city traffic and beyond.</p>
    </div>
    );
};

export default SkodaKushaqDescriptionComp;