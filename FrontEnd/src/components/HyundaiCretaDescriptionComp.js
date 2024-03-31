import React from 'react';
import creta from '../assets/images/HyundaiCreta1.jpg';
import '../components/style.css';

const HyundaiCretaDescriptionComp = () => {

  return (
    <div className="C1" style={{width: "100%"}}>
      <h1>Hyundai Creta</h1>
      <img src={creta} alt="Hyundai Creta" title='Hyundai Creta' style={{ width: '500px', height: '300px', objectFit: 'cover' }}/>
      <table className="car-attributes" border="4" align='center'>
      <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fuel Type:</td>
                            <td>Petrol / Diesel</td>
                        </tr>
                        <tr>
                            <td>Length:</td>
                            <td> 4300 mm</td>
                        </tr>
                        <tr>
                            <td>Mileage:</td>
                            <td> 16 kmpl to 22 kmpl</td>
                        </tr>
                        <tr>
                            <td>Type: </td>
                            <td>Compact SUV</td>
                        </tr>
                        <tr>
                            <td>NCAP Rating:</td>
                            <td>5 Stars</td>
                        </tr>
                        <tr>
                            <td>Cost:</td>
                            <td>starting from $XX,XXX</td>
                        </tr>
                        <tr>
                            <td>Top Speed: </td>
                            <td>185 km/h</td>
                        </tr>
                        <tr>
                            <td>Torque: </td>
                            <td>242 Nm @ 1500-3200 rpm</td>
                        </tr>
                        <tr>             
                            <td>Boot Space:</td>
                            <td>433 liters</td>   
                        </tr>
        </tbody>
        </table>
      <p>The Hyundai Creta is a stylish and compact SUV that offers a perfect blend of performance, comfort, and safety.</p>
      <p>With its fuel-efficient engines, spacious interiors, and advanced safety features, the Hyundai Creta is ideal for both city driving and long journeys.</p>
    </div>
  );
}

export default HyundaiCretaDescriptionComp;