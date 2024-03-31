import React from 'react';
import TataTiago from '../assets/images/TATATiago.jpg';
import '../components/style.css';

const TATAtiagoDescriptionComp = () => {

    return ( 
      <div className="C1" style={{width: "100%"}}>
       <h1>Tata Tiago</h1>
       <img src={TataTiago} alt="Tata Tiago" title='Tata Tiago' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
        <td>Up to 23.84 kmpl (Petrol)<br/>Up to 27.28 kmpl (Diesel)</td>
        </tr>
        <tr>
        <td>Length</td>
        <td>3765 mm</td>
        </tr>
        <tr>
        <td>Type</td>
        <td>Hatchback</td>
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
        <td>242 liters</td>
        </tr>
        </tbody>
        </table>
        <p>The Tata Tiago is a stylish and affordable hatchback known for its fuel efficiency and comfortable ride.</p>
        <p>With its spacious cabin, frugal engines, and modern features, the Tata Tiago is an ideal choice for city commuting and occasional long drives.</p>                
        <h4>Overview</h4>
        <p>
            The Tata Tiago is a hatchback car manufactured by Tata Motors. It was first introduced in 2016 and has become one of the popular choices in the hatchback segment due to its stylish design, fuel efficiency, and affordable pricing.
        </p>
        <h4>Design</h4>
        <p>
            The Tata Tiago features a modern and youthful design with sleek lines and a dynamic silhouette. Its signature elements include the honeycomb grille, swept-back headlamps, and sharp character lines, giving it a distinctive appearance on the road.
        </p>
    </div>
  );
};

export default TATAtiagoDescriptionComp;