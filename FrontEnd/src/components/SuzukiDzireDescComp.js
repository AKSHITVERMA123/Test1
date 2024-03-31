import React from 'react';
import Dzire from '../assets/images/SuzukiDzireSedanCar.webp';
import '../components/style.css';

const SuzukiDzireDescComp = () => {

    return (
        <div className="C1" style={{width: "100%"}}>
        <h1>Suzuki Dzire</h1>
        <img src={Dzire} alt="Suzuki Dzire" title='Suzuki Dzire' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Up to 24.12 kmpl (Petrol)<br/>Up to 28.40 kmpl (Diesel)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>3995 mm</td>
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
            <td>Up to 165 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>113 Nm @ 4400 rpm (Petrol)<br/>190 Nm @ 2000 rpm (Diesel)</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>378 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Suzuki Dzire is a compact sedan known for its fuel efficiency, comfort, and reliability.</p>
      <p>With its spacious cabin, efficient engines, and modern features, the Suzuki Dzire offers a comfortable and enjoyable driving experience.</p> 
   </div>
  );
};

export default SuzukiDzireDescComp;