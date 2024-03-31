import React from 'react';
import MahindraThar from '../assets/images/MahindraTharImage2.jpg';
import '../components/style.css';

const Mahindratharcomp = () => {

    return (
       <div className="C1" style={{width: "100%"}}>
             <h1>Mahindra Thar</h1>
             <img src={MahindraThar} alt="Mahindra Thar"  title='Mahindra Thar' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
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
            <td>13 kmpl to 15 kmpl</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>3985 mm</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>SUV</td>
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
            <td>150 km/h</td>
          </tr>
          <tr>
            <td>Torque</td>
            <td>320 Nm @ 1500-3000 rpm</td>
          </tr>
          <tr>
            <td>Boot Space</td>
            <td>Not specified</td>
          </tr>
        </tbody>
      </table>
      <p>The Mahindra Thar is an iconic SUV known for its ruggedness and off-road capabilities.</p>
      <p>With its powerful engine options, robust build quality, and advanced features, the Mahindra Thar is designed to conquer any terrain with ease.</p>
      <h4>Overview</h4>
      <p>
        The Mahindra Thar is an iconic off-road SUV manufactured by Mahindra & Mahindra. It was first introduced in XXXX and is known for its rugged design, off-road capabilities, and go-anywhere attitude.
      </p>
      <h4>Design</h4>
      <p>
        The Mahindra Thar features a classic and utilitarian design with a robust chassis, high ground clearance, and all-terrain capabilities. Its removable roof and doors offer an open-air driving experience, while modern amenities provide comfort and convenience.
      </p>
    </div>
    );
};

export default Mahindratharcomp;
