import React from 'react';
import Kodiaq from '../assets/images/SkodaKodiaqCar.webp';
import '../components/style.css';

const SkodaKodiaqDescriptionComp   = () => { 
    return (
        <div className="C1" style={{width: "100%"}}>
                <h1>Skoda Kodiaq</h1>
                <img src={Kodiaq} alt="Skoda Kodiaq" title='Skoda Kodiaq' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Diesel / Petrol</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>Up to 16.25 kmpl (Petrol)<br/>Up to 16.81 kmpl (Diesel)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4697 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>SUV</td>
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
            <td>Up to 200 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>340 Nm @ 1750-3000 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>270-630 liters (with third row folded)</td>
          </tr>
        </tbody>
      </table>
      <p>The Skoda Kodiaq is a premium SUV offering luxury, comfort, and performance.</p>
      <p>With its spacious interiors, advanced safety features, and powerful engine options, the Skoda Kodiaq is ideal for both city driving and long journeys.</p>
      <h4>Overview</h4>
      <p>
        The Skoda Kodiaq is a mid-size SUV manufactured by Czech automaker Skoda Auto. It offers a spacious and comfortable interior, powerful engine options, and a host of advanced safety and technology features.
      </p>
      <h4>Design</h4>
      <p>
        The Skoda Kodiaq features a bold and distinctive design with sharp lines, a prominent grille, and stylish LED headlights. Its luxurious interior is equipped with premium materials and innovative technology to enhance the driving experience for both the driver and passengers.
      </p>
    </div>
  );
};

export default SkodaKodiaqDescriptionComp;
