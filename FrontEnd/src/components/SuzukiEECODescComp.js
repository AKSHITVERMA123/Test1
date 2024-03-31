import React from 'react';
import eeco from '../assets/images/MarutiEecoCarSide.webp';
import '../components/style.css';

const SuzukiEECODescComp = () => {

    return (
      <div className="C1" style={{width: "100%"}}>
      <h1>Suzuki Eeco</h1>
      <img src={eeco} alt="Suzuki Eeco" title='Suzuki Eeco' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Petrol / CNG</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>16.11 kmpl (Petrol)<br/>21.94 km/kg (CNG)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>3675 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>MPV</td>
          </tr>
          <tr>
            <td>NCAP Rating</td>
            <td>Not Applicable</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Starting from ₹4.33 lakhs (ex-showroom, Delhi)</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td>Up to 100 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>85 Nm @ 3000 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>540 liters (5-seater variant)</td>
          </tr>
        </tbody>
      </table>
      <p>The Suzuki Eeco is a practical and spacious MPV designed for versatility and affordability.</p>
      <p>With its flexible seating configurations, fuel-efficient engine options, and affordable price, the Suzuki Eeco is an ideal choice for large families and commercial purposes.</p>
    </div>
  );
};

export default SuzukiEECODescComp;