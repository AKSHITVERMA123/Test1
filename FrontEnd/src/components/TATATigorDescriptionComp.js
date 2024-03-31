import React from 'react';
import TATATigor from '../assets/images/TATATigorCarEV.webp';
import '../components/style.css';

const TATATigorDescriptionComp = () => {

    return (
        <div className="C1" style={{width: "100%"}}>
                <h1>Tata Tigor</h1>
                <img src={TATATigor} alt="Tata Tigor" title='Tata Tigor' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Up to 20.3 kmpl (Petrol)<br/>Up to 24.7 kmpl (Diesel)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>3993 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Sedan</td>
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
            <td>Up to 150 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>113 Nm @ 3300 rpm (Petrol)<br/>140 Nm @ 1800-3000 rpm (Diesel)</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>419 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Tata Tigor is a compact sedan known for its fuel efficiency and spacious interiors.</p>
      <p>With its stylish design, comfortable ride, and advanced features, the Tata Tigor is an ideal choice for city driving and occasional long trips.</p>
      <h4>Overview</h4>
       <p>
         The Tata Tigor is a compact sedan manufactured by Tata Motors. It was first introduced in 2017 and is known for its stylish design, spacious interiors, and fuel-efficient engines.
       </p>
       <h4>Design</h4>
        <p>
         The Tata Tigor features a unique design with a coupe-like roofline and bold character lines. Its sleek appearance is complemented by elements such as the signature grille, projector headlamps, and LED tail lamps, giving it a sophisticated look on the road.
        </p>
     </div>
   );
};
    
export default TATATigorDescriptionComp;
