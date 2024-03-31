import React from 'react';
import Bolero from '../assets/images/MahindraBoleroNeoCar.jpg';
import '../components/style.css';

const MahindraBoleroNeoDescComp = () => {

    return (
        <div className="C1" style={{width: "100%"}}>
         <h1>Mahindra Bolero</h1>
         <img src={Bolero} alt="Mahindra Bolero" title='"Mahindra Bolero' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>15 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>3995 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>SUV</td>
          </tr>
          <tr>
            <td>NCAP Rating</td>
            <td>Not rated</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>Starting from $XX,XXX</td>
          </tr>
          <tr>
            <td>Top Speed</td>
            <td>130 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>195 Nm @ 1400-2200 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>690 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Mahindra Bolero is a rugged and reliable SUV designed for tough terrains and long journeys.</p>
      <p>With its robust build, powerful engine, and spacious interior, the Mahindra Bolero offers a comfortable and dependable driving experience.</p>
      <h4>Overview</h4>
      <p>
       The Mahindra Bolero is a rugged SUV manufactured by Mahindra & Mahindra. It was first introduced in XXXX and is known for its durability, reliability, and off-road capabilities, making it a popular choice in rural and semi-urban areas.
      </p>
      <h4>Design</h4>
      <p>
       The Mahindra Bolero features a robust and utilitarian design with a sturdy body-on-frame construction. Its spacious cabin, high ground clearance, and powerful engine make it suitable for various terrains and applications, including personal and commercial use.
      </p>
    </div>
    )
}

export default MahindraBoleroNeoDescComp;