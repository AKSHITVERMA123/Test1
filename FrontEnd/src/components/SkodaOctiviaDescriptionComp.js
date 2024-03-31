import React from 'react';
import Octivia from '../assets/images/SkodaOctiviaCar.jpg';
import '../components/style.css';

const SkodaOctiviaDescriptionComp = () => {

    return (
        <div className="C1" style={{width: "100%"}}> 
           <h1>Skoda Octavia</h1>
           <img src={Octivia} alt="Skoda Octavia" title='Skoda Octavia' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>15 kmpl to 20 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4689 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Sedan</td>
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
            <td>Over 200 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>250 Nm @ 1500-3500 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>590 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Skoda Octavia is a premium sedan known for its elegance, performance, and advanced features.</p>
      <p>With its spacious interiors, powerful engine options, and top-notch safety ratings, the Skoda Octavia offers a luxurious driving experience for both city commuting and long trips.</p>
      <h4>Overview</h4>
      <p>
          The Skoda Octavia is a compact executive car manufactured by Skoda Auto. It was first introduced in XXXX and is known for its timeless design, spacious interiors, and exceptional build quality.
      </p>
      <h4>Design</h4>
      <p>
          The Skoda Octavia features a sleek and elegant design with sharp lines, sculpted surfaces, and distinctive lighting elements. Its refined interior offers comfort, connectivity, and advanced safety features for an enjoyable driving experience.
      </p>
    </div>
    )
}

export default SkodaOctiviaDescriptionComp;
