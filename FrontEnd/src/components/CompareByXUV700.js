

import React from 'react';
import '../components/style.css';
import Thar from '../assets/images/MahindraTharImage.jpg';
import XUV700 from '../assets/images/MahindraXUV700.webp';

const CompareByXUV700 = (props) => {
    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Mahindra Thar</h1>
                <img src={Thar} id='ImageHeading' alt="Mahindra Thar car image" title='Mahindra Thar' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car {props.attr}</td>
                            <td>{props.val}</td>
                        </tr>
                        </tbody>
                </table>

                <h1>Mahindra XUV700</h1>
                <img src={XUV700} alt='Mahindra XUV700' title='Mahindra XUV700' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car {props.attr}</td>
                            <td>{props.val}</td>
                        </tr>
                        </tbody>
                </table>
         </div>
    </div>
   )
}

export default CompareByXUV700;