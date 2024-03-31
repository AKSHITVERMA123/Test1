import React, { Component } from 'react';
import TataPunch from '../assets/images/TATAPunch1.jpg';
import '../components/style.css';

class TATAPunchDescriptionComp extends Component {

    render() {

        return (
            <div className="C1" style={{width: "100%"}}>
                <h1>Tata Punch</h1>
                <img src={TataPunch} alt="Tata Punch" title='Tata Punch' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
                    <td>Petrol</td>
                 </tr>
                 <tr>
                    <td>Mileage</td>
                    <td>Up to 18 kmpl</td>
                 </tr>
                 <tr>
                    <td>Length</td>
                    <td>3840 mm</td>
                 </tr>
                 <tr>
                   <td>Type</td>
                   <td>Compact SUV</td>
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
                    <td>Up to 155 km/h</td>
                 </tr>
                 <tr>
                    <td>Torque</td>
                    <td>113 Nm @ 3500 rpm</td>
                 </tr>
                 <tr>
                    <td>Boot Space</td>
                    <td>Not specified</td>
                 </tr>
                </tbody>
                </table>
      <p>The Tata Punch is a compact SUV designed for urban exploration and adventurous drives.</p>
      <p>With its stylish design, peppy performance, and advanced features, the Tata Punch offers a fun and comfortable driving experience.</p>
      <h4>Overview</h4>
      <p>
        The Tata Punch is a compact SUV manufactured by Tata Motors. It was first introduced in XXXX and is designed to offer a rugged yet stylish option in the subcompact SUV segment.
      </p>
      <h4>Design</h4>
      <p>
        The Tata Punch features a bold and muscular design with SUV-inspired styling cues. Its high ground clearance, sculpted body lines, and rugged elements make it suitable for both urban and off-road adventures.
      </p>
      </div>
    );
  };  
};

export default TATAPunchDescriptionComp;
