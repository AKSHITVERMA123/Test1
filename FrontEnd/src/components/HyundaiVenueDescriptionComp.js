import React from 'react';
import Venue from '../assets/images/HyundaiVenue1.jpg';
import '../components/style.css';

const HyundaiVenueDescriptionComp = () => {

    return (
      <div className="C1" style={{width: "100%"}}>
      <h1>Hyundai Venue</h1>
      <img src={Venue} alt="Hyundai Venue" title='Hyundai Venue' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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
            <td>17 kmpl to 23 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>3995 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Subcompact SUV</td>
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
            <td>170 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>220 Nm @ 1500-2750 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>350 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Hyundai Venue is a stylish and versatile subcompact SUV perfect for urban adventures.</p>
      <p>With its fuel-efficient engines, compact size, and advanced safety features, the Hyundai Venue offers a comfortable and dynamic driving experience.</p>
    </div>
  );
}

export default HyundaiVenueDescriptionComp;