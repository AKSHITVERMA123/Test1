import React from 'react';
import Seltos from '../assets/images/KIASeltos.jpg';
import '../components/style.css';

const KIASeltosDescriptionComp = () => {

    return (
        <div className="C1" style={{width: "100%"}}>
                   <h1>Kia Seltos</h1>
                  <img src={Seltos} alt="Kia Seltos" title='Kia Seltos' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
      <table border="4" align='center'>
        <tbody>
          <tr>
            <td>Fuel Type</td>
            <td>Petrol / Diesel</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>16 kmpl to 21 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4315 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Compact SUV</td>
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
            <td>195 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>265 Nm @ 1500-3000 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>433 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Kia Seltos is a stylish and feature-packed compact SUV designed for modern lifestyles.</p>
      <p>With its fuel-efficient engines, spacious interiors, and advanced safety features, the Kia Seltos offers a comfortable and dynamic driving experience.</p>
      </div>
    );
}

export default KIASeltosDescriptionComp;