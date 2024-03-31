import React from 'react';
import I20 from '../assets/images/HyundaiI20Car1.jpg';

const HyundaiI20DescriptionComp = () => {
    
    return (
            <div className="C1" style={{width: "100%"}}>
                <h1>Hyundai i20</h1>
                <img src={I20} alt="Hyundai i20 car image" title='"Hyundai i20' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Fuel Type: </td>
                    <td>Petrol / Diesel</td>
                    </tr>
                    <tr>
                    <td>Mileage:</td>
                    <td>20 kmpl to 25 kmpl</td>
                    </tr>
                    <tr>
                    <td>Length: </td>
                    <td>3995 mm</td>
                    </tr>
                    <tr>
                    <td>Type: </td>
                    <td>Hatchback</td>
                    </tr>
                    <tr>
                    <td>NCAP Rating:</td>
                    <td>4 Stars</td>
                    </tr>
                    <tr>
                    <td>Cost:</td>
                    <td>Starting from $XX,XXX</td>
                    </tr>
                    <tr>
                    <td>Top Speed: </td>
                    <td>180 km/h</td>
                    </tr>
                    <tr>
                    <td>Torque:</td>
                    <td>172 Nm @ 1500-4000 rpm</td>
                    </tr><tr>
                    <td>Boot Space: </td>
                    <td>311 liters</td>
                    </tr>
                    </tbody>
                    </table>
                    <p>The Hyundai i20 is a stylish and feature-packed hatchback designed for urban driving.</p>
                    <p>With its fuel-efficient engines, spacious interiors, and impressive safety features, the Hyundai i20 offers a comfortable and enjoyable driving experience.</p>
                    </div>
    )
}

export default HyundaiI20DescriptionComp;
