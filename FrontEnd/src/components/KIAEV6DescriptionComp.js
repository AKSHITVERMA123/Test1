import React from 'react';
import EV6 from '../assets/images/KIAEV6carimage.webp';
import '../components/style.css';

const KIAEV6DescriptionComp = () => {

    return (
        <div className="C1" style={{width: "100%"}}>
         <h1>Kia EV6</h1>    
          <img src={EV6} alt="Kia EV6" title='Kia EV6' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Electric</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td>Up to 500 km (WLTP)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4680 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Crossover SUV</td>
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
            <td>Over 160 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>605 Nm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>Up to 490 liters</td>
          </tr>
        </tbody>
      </table>
      <p>The Kia EV6 is an all-electric crossover SUV designed to provide sustainable mobility with cutting-edge technology and performance.</p>
      <p>With its long-range capabilities, fast-charging capabilities, and spacious interior, the Kia EV6 offers a smooth and eco-friendly driving experience.</p>
                <h4>Overview</h4>
                <p>
                    The Kia EV6 is an all-electric crossover SUV manufactured by Kia Motors. It represents the brand's first dedicated electric vehicle platform and offers advanced technology, long-range capability, and fast-charging capability.
                </p>

                <h4>Design</h4>
                <p>
                    The Kia EV6 features a futuristic and aerodynamic design with sleek lines and a sculpted profile. Its spacious interior offers a minimalist yet sophisticated cabin with advanced connectivity features and eco-friendly materials.
                </p>

                {/* Include more sections and details */}
        </div>
    )
}

export default KIAEV6DescriptionComp;