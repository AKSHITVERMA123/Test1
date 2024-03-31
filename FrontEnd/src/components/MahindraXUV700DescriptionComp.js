import React from 'react';
import Xuv700 from '../assets/images/MahindraXUV700Car.webp';
import '../components/style.css';

const MahindraXUV700DescriptionComp = () => {

    return (
        <div className="C1" style={{width: "100%"}}>
                <h1>Mahindra XUV700</h1>
                <img src={Xuv700} alt="Mahindra XUV700" title='Mahindra XUV700' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>Up to 15.4 kmpl (Petrol)<br/>Up to 18 kmpl (Diesel)</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>4985 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>SUV</td>
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
            <td>Over 200 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>450 Nm @ 1750-3000 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>Not specified</td>
          </tr>
        </tbody>
      </table>
      <p>The Mahindra XUV700 is a feature-packed SUV designed for comfort, style, and performance.</p>
      <p>With its powerful engines, advanced technology, and luxurious interiors, the Mahindra XUV700 offers a premium driving experience for both city commutes and long journeys.</p>
                <h4>Overview</h4>
                <p>
                    The Mahindra XUV700 is a premium SUV manufactured by Mahindra & Mahindra. It was first introduced in XXXX and offers advanced technology, luxury features, and powerful performance, making it a compelling choice in its segment.
                </p>
                <h4>Design</h4>
                <p>
                    The Mahindra XUV700 features a bold and dynamic design with a muscular stance, sculpted lines, and premium finishes. Its spacious and well-equipped interior offers comfort, convenience, and advanced connectivity features for an enhanced driving experience.
                </p> 
        </div>
    )
}

export default MahindraXUV700DescriptionComp;