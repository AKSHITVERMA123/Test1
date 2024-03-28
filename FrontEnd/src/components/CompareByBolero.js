
import React from 'react';
import '../components/style.css';
import Thar from '../assets/images/MahindraThar.jpg';
import Bolero from '../assets/images/MahindraBoleroNeoCar.jpg';

const CompareByBolero = (props) => {
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

                <h1>Mahindra Bolero</h1>
                <img src={Bolero} alt='Mahindra Bolero' title='Mahindra Bolero' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

export default CompareByBolero;