import React from 'react';
import Slavia from '../assets/images/SkodaSlaviaCar1.jpg';
import '../components/style.css';

const SkodaSlaviaDescriptionComp = () => {
    return (
        <div className="C1" style={{width: "100%"}}>
        <h1>Skoda Slavia</h1>
        <img src={Slavia} alt="Skoda Slavia" title='Skoda Slavia' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Up to 20 kmpl (Petrol)<br/>Up to 25 kmpl (Diesel)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4556 mm</td>
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
            <td>190 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>250 Nm @ 1500-3500 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>Not specified</td>
          </tr>
        </tbody>
      </table>
      <p>The Skoda Slavia is a stylish and practical sedan designed to offer comfort and performance.</p>
      <p>With its fuel-efficient engines, spacious interiors, and modern features, the Skoda Slavia provides an enjoyable driving experience for both city commutes and long trips.</p>
    </div>
  );
}
export default SkodaSlaviaDescriptionComp;