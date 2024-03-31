import React from 'react';
import KiaCarnival from '../assets/images/KIACarnivalImage.jpg';
import '../components/style.css';

const KIACarnivalDescriptionComp = () => {
    return (
        <div className="C1" style={{width: "100%"}}>
           <h1>Kia Carnival</h1>      
                <img src={KiaCarnival} alt="Kia Carnival" title='Kia Carnival' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Diesel</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>13 kmpl to 15 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>5115 mm</td>
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
            <td>190 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>440 Nm @ 1500-2750 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>540 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Kia Carnival is a luxurious and spacious MPV designed to provide exceptional comfort and versatility.</p>
      <p>With its premium interiors, advanced features, and powerful engine, the Kia Carnival offers a refined and enjoyable driving experience for both short trips and long journeys.</p>
      <h4>Overview</h4>
      <p>
        The Kia Carnival is a minivan manufactured by Kia Motors. It offers spacious seating for up to eight passengers and is known for its versatility, comfort, and advanced safety features.
      </p>
      <h4>Design</h4>
      <p>
        The Kia Carnival features a sleek and sophisticated design with a bold front grille, LED headlights, and chrome accents. Its spacious and well-appointed interior offers luxurious amenities and ample cargo space for a comfortable journey.
      </p>
      </div>
   );
}

export default KIACarnivalDescriptionComp;