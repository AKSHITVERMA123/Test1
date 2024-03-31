import React from 'react';
import TUV300 from '../assets/images/MahindraTUV300image.png';
import '../components/style.css';

const MahindraTUV300DescriptionComp = () => {

    return (
        <div className="C1" style={{width: "100%"}}>
             <h1>Mahindra TUV300</h1>
                <img src={TUV300} alt="Mahindra TUV300" title='Mahindra TUV300' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>18.49 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>3995 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Compact SUV</td>
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
            <td>160 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>240 Nm @ 1500-2800 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>384 liters</td>
          </tr>
        </tbody>
      </table>
        <p>The Mahindra TUV300 is a compact SUV known for its rugged build and powerful performance.</p>
        <p>With its spacious interiors, fuel-efficient engine, and impressive torque, the Mahindra TUV300 is designed to handle both city streets and rough terrains with ease.</p>
        <h4>Overview</h4>
        <p>
           The Mahindra TUV300 is a compact SUV manufactured by Mahindra & Mahindra. It was first introduced in XXXX and is known for its rugged design, spacious interiors, and commanding presence on the road.
        </p>
        <h4>Design</h4>
        <p>
           The Mahindra TUV300 features a tough and muscular design with a boxy silhouette, high ground clearance, and front-end styling reminiscent of a battle tank. Its robust construction and practical features make it suitable for both urban and rural environments.
        </p>
    </div>
    )
}

export default MahindraTUV300DescriptionComp;